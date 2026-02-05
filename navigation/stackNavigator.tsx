import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeStack from '../navigation/homeStack';
import SaveFavorite from '../Screens/FavoritesScreen';
import NewRelsStack from '../navigation/NewReles';

const lower=createBottomTabNavigator();


export default function StackNavigator() {
  return (
    <lower.Navigator>
    <lower.Screen name="HomeTab" component={HomeStack} 
    options={{ tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} />,
    headerTintColor:"#333",
    headerStyle: {
      backgroundColor: "#d6981de0",
    },
    tabBarActiveTintColor:"#d6981de0",
    tabBarInactiveTintColor: "white",    
    
    tabBarStyle: {
      backgroundColor: "#000000",
    } }} /> 

    <lower.Screen name="Upcoming" component={NewRelsStack}
    options={{ tabBarIcon: ({ color }) => <Ionicons name="download-outline" color={color} size={24} />,
    headerTintColor:"#ddeb3d",
    headerStyle: {
      backgroundColor: "#131212",
    },

    tabBarActiveTintColor: "#d8de93", 
    tabBarInactiveTintColor: "gray",    
    
    tabBarStyle: {
      backgroundColor: "#000000",
    },
  }}/>


    <lower.Screen  name="Favourites" component={SaveFavorite} 
    options={{ tabBarIcon: ({ color }) => <Ionicons name="heart" color={color} size={24} />,
    tabBarActiveTintColor: "#ec0a0a", 
    tabBarStyle: {
      backgroundColor: "#000000",
    },
    headerTintColor:"red",
    headerStyle: {
      backgroundColor: "#1c0b0b",
    },
    }}/>
    </lower.Navigator>
  );
}

































