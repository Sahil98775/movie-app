import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import NewRelease from '../Screens/NewRelease';
import DetailsScreen from '../Screens/DetailsScreen';


const Stack=createNativeStackNavigator();

export default function NewRelsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Upcome" component={NewRelease} options={{headerShown:false,}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false,}} />
        </Stack.Navigator>

    );

}




