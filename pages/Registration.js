import { SafeAreaView, View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Svg, { Path } from 'react-native-svg';
import * as React from 'react';

export default function Registration({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Animatable.View animation='bounceIn' style={styles.shadowContainer}>
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/ict-logo.png')} />
                    <Text style={styles.txt}>TVL-ICT</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry 
                    />

             
                    

                    <TouchableOpacity style={styles.registerBtn}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.login} onPress={()=> navigation.navigate("Login")}>
                        <Text>Do have an account? </Text>
                        <Text style={styles.link}>Sign in!</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <View style={styles.waveBox}>
                <Svg 
                style={styles.wave}
                height={200}
                width={Dimensions.get('screen').width}
                viewBox='0 0 1440 320'
                >
                    <Path 
                        fill={'#2471A3'}
                         d="M0,224L40,213.3C80,203,160,181,240,197.3C320,213,400,267,480,261.3C560,256,640,192,720,165.3C800,139,880,149,960,133.3C1040,117,1120,75,1200,69.3C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                         />
            </Svg>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        fontWeight: 'bold',
   
    },
    shadowContainer: {
        width: '100%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputContainer: {
        borderRadius: 5,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1,
     
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        margin: 10,
        width: '100%',
    },
    txt: {
        fontSize: 30,
        padding: 20,
        letterSpacing: 1,
       
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    registerBtn: {
        backgroundColor: '#2471A3',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 1,
    },
    link: {
        color: '#2471A3',
        textDecorationLine: 'underline',
    },
    login: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: 20
    },
    forgotPassword: {
        color: '#2471A3',
        textDecorationLine: 'underline',
    },

    waveBox : {
        position: 'absolute',
        bottom:  0,
        width: Dimensions.get('screen').width,
        backgroundColor: '#2471A3',
        height: 400,
         zIndex: -1,
    },
    wave: {
        zIndex: -1,
        position: 'absolute',
        bottom: 320,
        width: Dimensions.get('screen').width,
        height: 100
    }
});