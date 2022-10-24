import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText/AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'

const ListItem = ({
    image,
    title,
    subTitle,
    description,
    onPress,
    renderRightActions,
    IconComponent,
}) => (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                {IconComponent && <IconComponent />}
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.detailsContainer}>
                    <AppText numberOfLines={1} style={styles.title}>
                        {title}
                    </AppText>
                    <AppText numberOfLines={2} style={styles.description}>
                        {description}
                    </AppText>
                
                </View>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={25}
                    color={colors.medium}
                />
            </View>
        </TouchableHighlight>
    </Swipeable>
)

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
       padding: 15,
       backgroundColor: colors.white,
    },
    description: {
        fontWeight: "300",
        color: colors.medium,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    }
});

export default ListItem;