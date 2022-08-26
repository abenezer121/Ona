import { View, Text } from 'react-native'
import React from 'react'
import {
  BookmarkIcon,
} from "react-native-heroicons/solid";
export default function DesignLineWideCard() {
  return (
    <View className="flex-row w-full justify-between bg-gray-200 mt-[5%]">
                  <View className="flex-row">
                      <View className="px-10 bg-gray-300 py-[2%]">
                          <Text>sep</Text>
                          <Text className="text-4xl">08</Text>
                      </View>
                      <View className="mx-[5%] py-[2%]">
                          <Text>Lorem ipsum ipusm ipsum</Text>
                          <Text>Lorem ipsum</Text>
                          <Text>Lorem ipsum</Text>
                      </View>
                  </View>
                  <View className="py-[2%]">
                      <BookmarkIcon size={22} color="gray" />
                  </View>
                </View>
  )
}