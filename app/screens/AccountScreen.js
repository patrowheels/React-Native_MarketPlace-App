// third party library import statments
import React from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';

// our code import statments
import Screen from '../components/Screen';
import Icon from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperatorComponent from '../components/ListItemSeperator';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        } 
    },
    {
        title: " My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        } 
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
        title="Pat Wheeler"
        subTitle="wheelerp03@gmail.com"
        image={require('../assets/Me.jpg')}
        />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title} 
            ItemSeparatorComponent={ListItemSeperatorComponent}
            renderItem={({ item }) =>
                <ListItem
                title={item.title}
                IconComponent={
                <Icon 
                name={item.icon.name} 
                backgroundColor={item.icon.backgroundColor} />
            } />
        }
    />
    <MaterialCommunityIcons name={"email"} color={"blue"} size={50}
    />
        </View>

        <ListItem
        title="Log Out"
        iconComponent={
            <Icon name="logout" size={50} backgroundColor="#ffe66d" />
        } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light,
    }
});

export default AccountScreen;