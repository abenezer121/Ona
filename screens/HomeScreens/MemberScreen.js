import { View, Text } from 'react-native'
import React , { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
export default function MemberScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View>
      <Text>MemberScreen</Text>
    </View>
  )
}