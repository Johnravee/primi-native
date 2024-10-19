import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Navigation from '../components/Navigation';
import * as Animatable from 'react-native-animatable';

export default function Dashboard({navigation}) {
    return (
        <SafeAreaView animation='slideInUp'  style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <View style={styles.waveBox}>
                        <Svg
                            style={styles.wave}
                            height={200}
                            width={Dimensions.get('screen').width}
                            viewBox='0 0 1440 320'
                        >
                            <Path
                                fill={'#2471A3'}
                                d="M0,224L40,197.3C80,171,160,117,240,96C320,75,400,85,480,112C560,139,640,181,720,213.3C800,245,880,267,960,261.3C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                            />
                        </Svg>
                    </View>
                </View>

               

                <View style={styles.topics}>
                     <View style={styles.introduction}>
                    <Text style={styles.introTxt}>TVL ICT stands for Technical-Vocational-Livelihood (TVL) Information Communication Technology strand. It is a national certificate program at Level II, focusing on developing the skills of a computer system service technician according to industry standards.</Text>
                </View>
                    <View style={styles.topicBox}>
                        <View style={styles.topicImg}>
                            <Image style={styles.topicLogo} source={require('../assets/hardware.jpg')} />
                        </View>
                        <TouchableOpacity style={styles.topicBtn}  onPress={() => navigation.navigate('Hardware')}>

                            <Text style={styles.buttonText}>Learn more</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topicBox}>
                        <View style={styles.topicImg}>
                            <Image style={styles.topicLogo} source={require('../assets/hardware.jpg')} />
                        </View>
                        <TouchableOpacity style={styles.topicBtn}>
                            <Text style={styles.buttonText}>Learn more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <Navigation navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center'
    },
    scrollContainer: {
        backgroundColor: 'white',
        paddingBottom: 50
    },
    welcome: {
        backgroundColor: '#2471A3',
        paddingTop: 50,
        paddingBottom: 20,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 15,
        marginTop: 20,
    },
    
    waveBox: {
        position: 'absolute',
        top: 60,
        width: Dimensions.get('screen').width,
        height: 70,
        zIndex: 1,
    },
    wave: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        width: Dimensions.get('screen').width,
    },
    introTxt:{
        fontSize: 20,
        fontWeight: '400',
        padding: 20,
        textAlign: 'center'
    },
    topics: {
        width: '100%',
        zIndex: -1,
        height: 'auto',
        marginTop: 100,
    },
    topicBox: {
        padding: 20,
    },
    topicLogo: {
        width: 'auto',
        height: 250,
    },
    topicBtn: {
        borderRadius: 50,
        textTransform: 'uppercase',
        padding: 15,
        backgroundColor: '#2471A3',
        width: '30%',
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
});



