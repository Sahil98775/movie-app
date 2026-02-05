import {View,Text,FlatList,TouchableOpacity,Image,ActivityIndicator,TextInput,} from "react-native";
import { useEffect, useState } from "react";
import { getPopularMovies, IMAGE_BASE } from "../API/tmdb";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import styl from "../styl";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
};

export type RootStackParamList = {
  Details: { movie: Movie };
};

const HomeScreen = () => {
  type DetailsScreenProp = NativeStackNavigationProp<RootStackParamList,"Details">;

  const navigation = useNavigation<DetailsScreenProp>();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [query, setQuery] = useState(" ");

  // const [isFav,setIsFav]=useState(false);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  
  
  useEffect(() => {
    loadMovies();
    loadFavorites();
  }, []);
  

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await getPopularMovies();
      setMovies(data);
    } catch (err) {
      setError("Failed to load movies"); 
    } finally {
      setLoading(false);
    }
  };
  
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
  
  const toggleFavorite = async (movie: Movie) => {
  let updatedFavs: Movie[];

  const isFav = favorites.some(fav => fav.id === movie.id);
  if (isFav) {
    updatedFavs = favorites.filter(fav => fav.id !== movie.id);
  } else {
    updatedFavs = [...favorites, movie];
  }
  setFavorites(updatedFavs);
  await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavs));
};  
  

  const renderMovie = ({ item }: { item: Movie }) => {
    const isFav = favorites.some(fav => fav.id === item.id);
    return (
      <>
        <TouchableOpacity
          style={styl.card}
          onPress={() =>
            navigation.navigate('Details', {
              movie: item,
            })
          }
        >
          <View style={styl.poster}>
          <Image
            source={{ uri: `${IMAGE_BASE}${item.poster_path}` }}
            style={styl.poster}
            >
          </Image>

        <Ionicons name={isFav ? "heart" : "heart-outline"}  
        size={25} 
        style={{ color: isFav ? 'red':'white', position:'absolute', left:125,bottom:220}}
        onPress={() => toggleFavorite(item)}
        />

          </View>

          <Text style={styl.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styl.rating}>⭐ {item.vote_average}</Text>
        </TouchableOpacity>
      </>
    );
  };

  if (loading) {
    return (
      <View style={styl.center}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styl.center}>
        <Text style={{ color: "white" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styl.container}>
      <View style={styl.searchInput}>
        <TextInput
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 9,
            borderRadius: 8,
            width: 290,
            backgroundColor: "#a19a9a",
            fontSize: 17,
            fontWeight: "400",
          }}
        />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/6351/6351888.png",
          }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>

      <View style={styl.dispscr}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
