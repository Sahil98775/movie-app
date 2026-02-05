import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_BASE } from "../API/tmdb";
import styl from "../styl";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Position } from "../node_modules/css-tree/node_modules/source-map/source-map.d";
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

const FavoriteScreen = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setFavorites([]);
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.log("Error loading favorites", e);
    }
  };
  const removeFavorite = async (movieId: number) => {
    const updated = favorites.filter((movie) => movie.id !== movieId);

    setFavorites(updated);
    await AsyncStorage.setItem("favorites", JSON.stringify(updated));
  };

  const renderItem = ({ item }: { item: Movie }) => {
    return (
      <View style={styl.favCard}>
        <Image
          source={{ uri: `${IMAGE_BASE}${item.poster_path}` }}
          style={styl.favPoster}
        />

        <View style={styl.favInfo}>
          <Text style={styl.favTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styl.favRating}>⭐ {item.vote_average}</Text>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={() => removeFavorite(item.id)}
        >
          <Ionicons name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styl.container}>
      {favorites.length === 0 ? (
        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          No favorites added ❤️
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default FavoriteScreen;
