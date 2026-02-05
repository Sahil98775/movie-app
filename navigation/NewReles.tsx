// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import NewRelease from '../Screens/NewRelease';
// import DetailsScreen from '../Screens/DetailsScreen';

// const Stack=createNativeStackNavigator();

// export default function NewRelsStack(){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Upcome" component={NewRelease} options={{headerShown:false,}}/>
//             <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false,}} />
//         </Stack.Navigator>

//     );

// }

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import DetailsScreen from "../Screens/DetailsScreen";
import { bundleDirectory } from "../node_modules/expo/node_modules/expo-file-system/src/legacy/FileSystem";

const Stack = createNativeStackNavigator();

export default function NewRelsStack() {
  return (
    <Stack.Navigator>
      {/* Bottom Tabs */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      {/* Details */}
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
