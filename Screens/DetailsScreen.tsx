import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { IMAGE_BASE } from "../API/tmdb";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
};

export default function Details() {
  const route = useRoute<any>();
  const { movie } = route.params;
  const addToFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const favs = stored ? JSON.parse(stored) : [];

      const alreadyFav = favs.some((fav: any) => fav.id === movie.id);

      if (!alreadyFav) {
        const updatedFavs = [...favs, movie];
        await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavs));
        alert("Added to Favorites ❤️");
      } else {
        alert("Already in Favorites");
      }
    } catch (error) {
      console.log("Error adding favorite", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE}${movie.poster_path}` }}
        style={styles.poster}
        resizeMode="contain"
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>⭐ {movie.vote_average}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>

      <View style={{ borderRadius: 8, paddingTop: 20, paddingBottom: 90 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#e50914",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={addToFavorites}
        >
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Add to Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 25,
  },

  poster: {
    width: "100%",
    height: 450,
    // borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    color: "#e2eb61",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  rating: {
    color: "gold",
    fontSize: 16,
    marginBottom: 12,
  },

  overview: {
    color: "#ccc",
    fontSize: 15,
    lineHeight: 22,
    paddingBottom: 40,
  },
});
