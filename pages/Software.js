import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import RightSideImg from '../components/RightSideImg';
import LeftSideImg from '../components/LeftSideImg';

export default function Software({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header navigation={navigation} />

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.imgView}>
                    <Image style={styles.imageBanner} source={require('../assets/softwarelogo.jpg')} />
                </View>

                <RightSideImg  
                    title={'Microsoft Office'} 
                    text={'Includes programs like Word, Excel, PowerPoint. Word is for creating documents, PowerPoint for presentations, and Excel for managing data and calculations.'} 
                    ImageUrl={require('../assets/office.png')}
                    borderRadiu={0}  />

                <LeftSideImg  
                    title={'Anti-virus Softwares'} 
                    text={'Antivirus software acts as a digital guardian, protecting your computer from harmful programs like viruses, malware, and ransomware. It works by scanning your system for suspicious activity and known threats, quarantining or removing any malicious files it finds. .'}
                    ImageUrl={require('../assets/antivirus.png')}
                    borderRadiu={0} />

                <RightSideImg  
                    title={'Programming Languages'} 
                    text={'Programming languages are the tools that software developers use to create applications, websites, and games. They act as a bridge between human instructions and the computer\'s logic, allowing us to tell computers what to do.'} 
                    ImageUrl={require('../assets/programming.png')}
                    borderRadiu={0}  />


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
        objectFit: 'fit'
    },
    blue:{
        width: Dimensions.get('screen').width,
        height: 100,
        backgroundColor: '#2471A3',
        marginTop: 20
    }
});
