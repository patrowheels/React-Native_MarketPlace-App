import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Platform, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from "./PickerItem";
import Screen from "./Screen";
import colors from '../config/colors';
import defaultStyles from "../config/styles";
import AppText from './AppText/AppText';

// selected Item here is a variable
// if theres no picker item component then the component will be picker item
function AppPicker({ icon, items,numberOfColumns, onSelectedItem,PickerItemComponent = PickerItem, placeholder,selectedItem, width = "100%", }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
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
            // flatlist comes with a prop called numcolumns
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
            
            <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {setModalVisible(false);
                onSelectedItem(item)
            } }
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