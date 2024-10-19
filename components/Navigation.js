import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Navigation({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.logoutBtn} 
          onPress={() => navigation.navigate("Login")} 
        >
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    width: '80%', 
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2471A3',
    borderRadius: 50,
    alignSelf: 'center', 
  },
  link: {
    fontSize: 16,
    color: 'white',
  },
  logoutBtn: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -17 }],   
    padding: 10,
    top: -20,
    backgroundColor: '#2471A3',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
});
