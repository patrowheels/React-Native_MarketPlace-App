import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText/AppText';

function PickerItem({item, onPress }) {
    return (
       <TouchableOpacity onPress={onPress}>
           <AppText style={styles.text}>{item.label}</AppText>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 25,
    }
})

export default PickerItem;