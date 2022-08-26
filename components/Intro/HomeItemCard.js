import { View, Text } from 'react-native'
import React from 'react'
import { BookmarkIcon , BellIcon, AdjustmentsIcon , SearchIcon} from "react-native-heroicons/outline";

export default function HomeItemCard() {
  return (
    <View className="mr-[5px]">
                      <View className="bg-gray-300 w-full h-[150px] w-[180px] ">
                           <View className="flex-row mx-[2%] justify-between mt-[4%]">
                                <View></View>
                                <BookmarkIcon size={22} color="gray"/>
                            </View>
                          
                      </View>
                      <View className="mt-[10px]" >
                          <Text className="font-bold">The first command is</Text>
                           <Text className="font-bold">The first command is</Text>
                      </View>
                  </View> 
  )
}