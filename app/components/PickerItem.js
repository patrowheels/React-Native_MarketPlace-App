import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText/AppText';

function PickerItem({ label, onPress }) {
    return (
       <TouchableOpacity onPress={onPress}>
           <AppText>{label}</AppText>
       </TouchableOpacity>
    );
}

export default PickerItem;