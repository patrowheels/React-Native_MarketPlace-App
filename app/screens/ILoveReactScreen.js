import React from 'react';
import { View , Image, StyleSheet, Text, ViewComponent } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';


function ILoveReactScreen(props) {
   return ( 
   
   <View style={Styles.container}>
        <MaterialCommunityIcons name="hand" size={200} color="dodgerblue" />
       
   </View>

   );
}

const Styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor: "grey",
      justifyContent: "center",
      alignItems: "center"
        
    },
});

export default ILoveReactScreen;