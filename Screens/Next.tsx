// import { View,Text } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { Button } from '@react-navigation/elements';
// import {ROUTES} from "../constants";

// import styl from '../styl'
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// type RootStackParamsList = {
//     MovieDiscovery: undefined,
//     Next: undefined
// }
// const NextScreen=()=> {
//     const navigation=useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
//     return (
//     <View style={styl.top}>
//       <Text>this is the next screen</Text>
//       <Button onPress={() => {navigation.push('Next')
//       } }>
//         Go to Details
//       </Button>
//       <Button onPress={() => {navigation.push('MovieDiscovery')
//         console.log("button")
//       } }>
//         Go to Home
//       </Button>

//       <Button screen={'MovieDiscovery'} onPressIn={()=>navigation.goBack()}>
//         Go Back
//       </Button>
      
//     </View>
//   );
// }

// export default NextScreen;
