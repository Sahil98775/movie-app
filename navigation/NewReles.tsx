import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import DetailsScreen from "../Screens/DetailsScreen";
import { bundleDirectory } from "../node_modules/expo/node_modules/expo-file-system/src/legacy/FileSystem";

const Stack = createNativeStackNavigator();

export default function NewRelsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#020202" },
        headerTitle: "About the Movie",
        headerTitleStyle: { color: "#FFFFFF" },
        headerTintColor: "#FF8C00",
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#333",
          },
        }}
      />
    </Stack.Navigator>
  );
}
