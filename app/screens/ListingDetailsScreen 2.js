import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';

import ListItem from '../components/ListItem'
import colors from '../config/colors'



function ListingDetailsScreen(props) {
    return (
       <View>
           <Image style={styles.Image} source={require('../assets/jacket.jpg')}/>
           <View style={styles.detailsContainer}>
           <AppText style={styles.title}>Red Jacket for sale</AppText>
           <AppText style={styles.price}>$100</AppText>
           <View style={styles.userContainer}>
           <ListItem 
           image={require("../assets/Me.jpg")}
           title="Pat Wheeler"
           subTitle="5 listings"/>
            </View>
           </View>


       </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    Image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
});

export default ListingDetailsScreen;