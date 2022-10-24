import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import defaultStyles from '../config/styles';

function AppTextInput({ icon,width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container,{ width }]}>
            { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            {/* this line of ocde directly affects the text in our form on list edit screen. */}
            <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        margin: 10,
        color: colors.dark,
    }

    
})

export default AppTextInput;