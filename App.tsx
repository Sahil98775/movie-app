import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';;


// const Stack = createNativeStackNavigator();

import StackNavigator from './navigation/stackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
);
}

