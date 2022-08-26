import { View, Text } from 'react-native'
import React , { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
export default function DesignLineScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <View>
      <Text>DesignLineScreen</Text>
    </View>
  )
}


