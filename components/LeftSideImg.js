import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LeftSideImg({ text, title, ImageUrl, borderRadiu}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image 
                    source={ImageUrl}
                    style={[styles.imageBox, { borderRadius: borderRadiu }]}
                />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 0,
        margin: 5,
        backgroundColor: '#f0f0f0',
        height: 200, 
    },
    textBox: {
        flex: 1, 
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: '#333',
        textAlign: 'start',
    },
    imageBox: {
        width: 200, 
        height: 170, 
        justifyContent: 'center', 
        alignItems: 'center', 
         resizeMode: 'contain',
    },
    image: {
        width: '100%',
        height: '100%',
       
    },
});
