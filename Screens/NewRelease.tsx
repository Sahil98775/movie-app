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
import { SafeAreaView } from "react-native-safe-area-context";
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
      style={{
        flex: 1,
        marginBottom: 20,
        marginHorizontal: 5,
      }}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("Details", {
          movie: item,
        })
      }
    >
      <View
        style={{
          backgroundColor: "#1c1c1c",
          borderRadius: 18,
          overflow: "hidden",
          elevation: 5,
        }}
      >
        <Image
          source={{ uri: IMAGE_BASE + item.poster_path }}
          style={{
            width: "100%",
            aspectRatio: 2 / 3,
          }}
          resizeMode="cover"
        />

        <View style={{ padding: 10 }}>
          <Text
            numberOfLines={1}
            style={{
              color: "#FF8C00",
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              color: "#aaa",
              fontSize: 15,
              marginTop: 4,
            }}
          >
            {item.release_date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (load) {
    return <ActivityIndicator size="large" color="orange" />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <FlatList
        data={upComing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
};
export default NewRelease;
