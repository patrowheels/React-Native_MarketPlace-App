import React from 'react';
import { View, StyleSheet } from "react-native";
import AppText from './AppText/AppText';
import Icon from "./Icon"

function CategoryPickerItem({item, onPress}) {
    // this is returning the circle icons with labels
    return <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        width: "33%",
    },
    label:{
       marginTop: 5, 
       textAlign: 'center',
    }
})
export default CategoryPickerItem;