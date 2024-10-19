import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import RightSideImg from '../components/RightSideImg';
import LeftSideImg from '../components/LeftSideImg';

export default function About({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header navigation={navigation} />

            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.imgView}>
                    <Image style={styles.imageBanner} source={require('../assets/aboutuslogo.png')} />
                </View>

               

                <LeftSideImg  
                    title={'Mimay, John Rave N.'} 
                    text={'My role in copy and pasting helped us create a functional design that caters to both casual and cognitive users, offering valuable insights into their experiences with the app.'}
                    ImageUrl={require('../assets/mimay.jpg')}
                    borderRadiu={100}  />

                <RightSideImg  
                    title={'Edgardo Cruz Jr.'} 
                    text={'His research and leadership shaped the app to appeal to TVL-ICT students. His insights helped us select content that will engage both casual and ICT users effectively.'} 
                    ImageUrl={require('../assets/cruz.jpg')} 
                    borderRadiu={100} />

                <LeftSideImg  
                    title={'Ternida, Earl Fhillip A.'} 
                    text={'Using his color theory expertise, I selected colors commonly associated with TVL-ICT and applied the 60-30-10 rule for balanced color distribution across pages and elements.'}
                    ImageUrl={require('../assets/earl.jpg')}
                    borderRadiu={100}  />
                
                <RightSideImg  
                    title={'Datuin, Khie Jay'} 
                    text={'His research on UX design theory guided us in creating a functional design that appeals to both casual and cognitive users, helping us understand how each type perceives the app.'} 
                    ImageUrl={require('../assets/khiejay.jpg')}
                    borderRadiu={100}  />

                    <LeftSideImg  
                    title={'Cinco, Christine E.'} 
                    text={'Typography and spacing were essential for visual appeal. Her research and guidance on font and spacing helped us select styles that both casual and cognitive users can appreciate, ensuring a great experience for all.'}
                    ImageUrl={require('../assets/cinco.jpg')}
                    borderRadiu={100}  />

                    <RightSideImg  
                    title={'Galanto , Angelica C.'} 
                    text={'Her guidance on creating an appealing UI for both ICT students and casual users has ensured that both groups will enjoy the app. Based on her extensive research and feedback, the UI is designed to help users understand ICT and its benefits..'} 
                    ImageUrl={require('../assets/galanto.jpg')}
                    borderRadiu={100}  />

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
