import { View, Text } from 'react-native'
import React , { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
export default function LearnScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View>
      <Text>LearnScreen</Text>
    </View>
  )
}