import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import RightSideImg from '../components/RightSideImg';
import LeftSideImg from '../components/LeftSideImg';

export default function Hardware({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header navigation={navigation} />

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.imgView}>
                    <Image style={styles.imageBanner} source={require('../assets/cpu.png')} />
                </View>

                <RightSideImg  
                    title={'Central Processing Unit'} 
                    text={'Often called the "brain" of the computer, the CPU is responsible for executing instructions and performing calculations. It receives input from various devices, processes the data, and produces the desired output'} 
                    ImageUrl={require('../assets/cpu.png')} />

                <LeftSideImg  
                    title={'Random Access Memory'} 
                    text={'RAM is a type of computer memory that stores data and instructions temporarily while the computer is running. RAM operates at much faster speeds than permanent storage devices. It\'s typically measured in gigabytes (GB).'}
                    ImageUrl={require('../assets/cpu.png')} />

                <RightSideImg  
                    title={'Motherboard'} 
                    text={'The motherboard is the primary circuit board of a computer system. It serves as a platform for connecting all other hardware components and allows them to communicate and work together.'} 
                    ImageUrl={require('../assets/cpu.png')} />

                <LeftSideImg  
                    title={'Storage Devices (HDD/SSD)'} 
                    text={'Storage devices are essential for storing and retrieving data in computer systems. They provide both short-term and long-term storage capabilities.'}
                    ImageUrl={require('../assets/cpu.png')} />
                
                <RightSideImg  
                    title={'Videocards/Graphics Cards'} 
                    text={'The GPU is an extension of the CPU that enhances the graphical quality of items displayed on a monitor. It\'s a chip-based device that specializes in graphics rendering.'} 
                    ImageUrl={require('../assets/cpu.png')} />

                    <View style={styles.blue}>

                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        paddingBottom: 0, 
    },
    imgView: {
        margin: 10,
        padding: 10, 
        backgroundColor: '#f0f0f0', 
        borderRadius: 10, 
    },
    imageBanner: {
        height: 200,
        width: '100%', 
        borderRadius: 10, 
    },
    blue:{
        width: Dimensions.get('screen').width,
        height: 100,
        backgroundColor: '#2471A3',
        marginTop: 20
    }
});
