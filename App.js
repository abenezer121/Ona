import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Intro from './screens/Intro';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <TailwindProvider>
      
          <NavigationContainer>
        <Stack.Navigator>
          
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Intro" component={Intro} />
            </Stack.Navigator>
          </NavigationContainer>
      </TailwindProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
