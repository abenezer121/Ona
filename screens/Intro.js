import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React , {useLayoutEffect , useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import HomeItemCard from '../components/Intro/HomeItemCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IntroScreen from './HomeScreens/IntroScreen';
import DesignLineScreen from './HomeScreens/DesignLineScreen';
import ProfileScreen from './HomeScreens/ProfileScreen';
import LearnScreen from './HomeScreens/LearnScreen';
import MemberScreen from './HomeScreens/MemberScreen';
import { UserIcon , HomeIcon , } from "react-native-heroicons/outline";



const Tab = createBottomTabNavigator();
export default function Intro() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    
  return (
      <Tab.Navigator>
          
        <Tab.Screen
                name="Home"
                component={IntroScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <HomeIcon name="Home" color="black" size={22} />
                ),
                }}
            />
          
          <Tab.Screen
              name="DesignLineScreen"
              component={DesignLineScreen}
              options={{
                tabBarLabel: 'Design Line',
                tabBarIcon: () => (
                    <UserIcon name="Design Line" color="black" size={22} />
                ),
                }}
          />
          <Tab.Screen
              name="LearnScreen"
              component={LearnScreen}
              options={{
                tabBarLabel: 'Learn',
                tabBarIcon: () => (
                    <UserIcon name="Learn" color="black" size={22} />
                ),
                }}
            
          />
          <Tab.Screen
              name="MemberScreen"
              component={MemberScreen}
              options={{
                tabBarLabel: 'Member',
                tabBarIcon: () => (
                    <UserIcon name="Member" color="black" size={22} />
                ),
                }}
          />
          <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <UserIcon name="Profile" color="black" size={22} />
                    ),
                }}/>
    </Tab.Navigator>
  )
}