import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose different icon sets

export default function Header({ navigation }) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Icon  style={styles.icon}  name="arrow-back" size={30} color="#010100" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width,
        backgroundColor: 'transparent', 
        height: '13%'
    },

    icon:{
        paddingTop: 70,
        paddingLeft: 20,
    }

});
