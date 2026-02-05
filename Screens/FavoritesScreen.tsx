import { View,Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_BASE } from "../API/tmdb";
import styl from "../styl";

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
      </View>
    );
  };

  return (
    <View style={styl.container}>
      {favorites.length === 0 ? (
        <Text style={{ color: "white", textAlign: "center", marginTop: 40 }}>
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
