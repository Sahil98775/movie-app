import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import SaveFavorite from "../Screens/FavoritesScreen";
import NewRelease from "../Screens/NewRelease";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000" },
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Upcoming"
        component={NewRelease}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="download-outline" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={SaveFavorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
