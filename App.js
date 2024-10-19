import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login'; 
import Registration from './pages/Registration'; 
import Dashboard from './pages/Dashboard'; 
import Hardware from './pages/Hardwares';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="Hardware"
          component={Hardware}
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
