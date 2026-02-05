import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

import StackNavigator from "./navigation/stackNavigator";
import HomeStack from "./navigation/homeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
