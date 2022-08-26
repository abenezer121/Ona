import { View, Text , SafeAreaView } from 'react-native'
import React , { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import {
 ArrowLeftIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";
import { ChevronRightIcon } from 'react-native-heroicons/outline';
export default function ProfileScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView className="h-full">
        <View className="w-full h-[50%]">
              <View className="mt-[20%]">
                  <View className="flex-row justify-center">
                      <UserCircleIcon size={200} color="gray"/>
                  </View>
                  <View className="flex-row justify-center">
                      <Text className="text-black text-4xl font-bold">Alexandria Davis</Text>
                  </View>
              </View>
              <View className="flex-row justify-center">
                  <View className="flex-row  mt-[10%] mx-[10%]">
                      <View>
                          <Text className="text-6xl text-gray-500">52</Text>
                          <Text>this is</Text>
                      </View>
                      <View className="mx-[16%]">
                          <Text className="text-6xl text-gray-500">26</Text>
                          <Text>this is</Text>
                      </View>
                      <View>
                          <Text className="text-6xl text-gray-500">12</Text>
                          <Text>this is</Text>
                      </View>
                  </View>
              </View>
              <View className="mt-[10%] bg-gray-300 mx-[5%] rounded">
                  <View className="flex-row justify-between mt-[9%] mx-[5%]">
                      <Text className="text-xl font-bold">Option one</Text>
                      <ChevronRightIcon size={22}  color="black"/>
                  </View>
                  <View className="flex-row justify-between mt-[9%] mx-[5%]">
                       <Text className="text-xl font-bold">Option one</Text>
                      <ChevronRightIcon size={22}  color="black"/>
                  </View>
                  <View className="flex-row justify-between mt-[9%] mx-[5%]">
                       <Text className="text-xl font-bold">Option one</Text>
                      <ChevronRightIcon size={22}  color="black"/>
                  </View>
                  <View className="flex-row justify-between mt-[9%] mx-[5%]">
                       <Text className="text-xl font-bold">Option one</Text>
                      <ChevronRightIcon size={22}  color="black"/>
                  </View>
                  <View className="flex-row justify-between mt-[9%] mb-[10%] mx-[5%]">
                       <Text className="text-xl font-bold">Option one</Text>
                      <ChevronRightIcon size={22}  color="black"/>
                  </View>
              </View>
        </View>
    </SafeAreaView>
  )
}