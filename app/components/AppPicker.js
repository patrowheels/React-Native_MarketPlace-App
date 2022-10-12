import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Platform, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from "./PickerItem";
import Screen from "./Screen";
import colors from '../config/colors';
import defaultStyles from "../config/styles";
import AppText from './AppText/AppText';

// selected Item here is a variable
function AppPicker({ icon, items, placeholder,selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            { icon && (<MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyles.colors.medium} 
            style={styles.icon} />)}

            {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
           
           <MaterialCommunityIcons 
           name="chevron-down"
           size={20} 
           color={defaultStyles.colors.medium} 
           />
           
        </View>
        </TouchableWithoutFeedback>
        
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)}/>
            <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
            
            <PickerItem
                label={item.label}
                onPress={() => console.log(item)} 
                /> 
                
            )}
            />
            </Screen>
        </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        margin: 10,
        color: colors.dark,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex:1,
    },
     text: {
        flex: 1,
    },
})

export default AppPicker;