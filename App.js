import React, {useEffect} from "react";
import * as ImagePicker from 'expo-image-picker'

import { View, Text, Button } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import ListItem from "./app/components/ListItem";
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ILoveReactScreen from "./app/screens/ILoveReactScreen";
import AppButton from "./app/components/AppButton";
import Card from './app/components/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import PickerItem from "./app/components/PickerItem";
import ListEditScreen from "./app/screens/ListEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

//

// select a tag hold command and D to be able to edit all of them at once
//select lines of code hold alt and use arrows to move them
// find file and type npm start (within terminal)
//expo start in terminal to launch expo
// control + shift + backtic gives fresh terminal in vs code!


const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Cameras", value: 3},
];

export default function App() {

  // This is the function that we made to solve a problem
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
    // This result object has a bunch of properties we can access
    if (!result.granted)
      alert("You need to enable permission to access the library")
  }

  return (
    // Here we are simply calling a function and then moving on not waiting for the results
    useEffect(() => {
      requestPermission();

    },[])
    
    <Screen>
      
       <AppPicker items={categories} icon="apps" placeholder="Category" />
       <AppTextInput icon="email" placeholder="Email" />
          </Screen>

        
  );

  // return <WelcomeScreen/>

  // return <ListEditScreen/>

  // return <RegisterScreen/>

  // return <ListingScreen />

  // return <AccountScreen />

  // return <MessagesScreen />

  // return <ListingDetailsScreen/>

  // return <ViewImageScreen />;


  // return <AppTextInput placeholder="Username" icon="email" />

 
  // return <ILoveReactScreen/>;

  // return <ListItem/> 

  // return <Icon/>

  

  //  return <AppPicker/>

// return (
// <View style={{
//   backgroundColor: '#f8f4f4',
//   padding: 20,
//   paddingTop: 100
// }}>

// <Card 
// title="Red Jacket for sale"
// subTitle="$100"
// image={require("./app/assets/jacket.jpg")}
// />
// </View>
// );
  

// return <PickerItem/>

}
