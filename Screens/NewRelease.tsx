import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import styl from "../styl";
import { IMAGE_BASE } from "../API/tmdb";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string;
};

// 🔹 Stack params
type RootStackParamList = {
  Details: { movie: Movie };
};

async function fetchUpcomingMovies() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4076ae03be82d1344d1193b36666567a"
    );
    const upcom = await res.json();
    return upcom.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

const NewRelease = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [upComing, setUpcoming] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchUpcomingMovies();
      setUpcoming(data);
      setLoad(false);
    };
    loadMovies();
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styl.card}
      onPress={() =>
        navigation.navigate("Details", {
          movie: item,
        })
      }
    >
      <View
        style={{
          width: "100%",
          marginBottom: 20,
          backgroundColor: "#312f2feb",
          padding: 3,
          borderRadius: 15,
        }}
      >
        <Image
          source={{ uri: IMAGE_BASE + item.poster_path }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 15,
          }}
        />
        <Text
          numberOfLines={1}
          style={{ color: "white", marginTop: 6, fontWeight: "bold" }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "#09e0f8a7", fontSize: 13 }}>Releasing on: </Text>
        <Text style={{ color: "#f5dd06", fontSize: 16 }}>
          {item.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (load) {
    return <ActivityIndicator size="large" color="orange" />;
  }

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <FlatList
        data={upComing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};
export default NewRelease;
