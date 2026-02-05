// import { View,Text,Pressable,Image,FlatList } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { useState,useEffect } from 'react';
// import styl from './styl'
// import { ROUTES } from "./constants";
// import {getPosts} from "./API/tmdb";

// const HomeScreen=()=> {
//   // const navigation =useNavigation();
//   const [movies,setMovies]=useState([]);
//   useEffect(()=>{
//     loadPost();
//   },[])

//   const loadPost=async()=>{
//     const data=await getPosts();
//     setMovies(data);
//   }
//   return (

//     <FlatList
//       data={movies}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={{ padding: 10 }}>
//           <Text>homeScreen</Text>
//           <Text>{item.title}</Text>
//         </View>
//       )}
//     />
//   );
// };


// export default HomeScreen;
// const HomeScreen=()=> {
//     const navigation =useNavigation();
//   return (

//     <View style={styl.home}>

//       <Text>This is the Movie Discovery Home Screen</Text>
        
//         <Pressable onPress={() => navigation.navigate(ROUTES.NEXT)}>
//            <Image source={{uri:"https://www.shutterstock.com/image-vector/next-arrow-icon-260nw-2066090543.jpg"}}
//         style={{ width: 80, height: 40, borderColor:'#333'}}
//         /> 
//         </Pressable>

//     </View>
// );
// }

// export default HomeScreen;

