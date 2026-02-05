import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';


const Stack=createNativeStackNavigator()

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false,}}/>
        </Stack.Navigator>

    )

}






