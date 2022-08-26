import { View, Text } from "react-native";
import React from "react";
import {
  BookmarkIcon,
  InformationCircleIcon,
  AdjustmentsIcon,
    SearchIcon,
  
} from "react-native-heroicons/outline";

export default function DesignLineCard() {
  return (
    <View className="mr-[5px]">
      <View className=" flex-col justify-between  bg-gray-300 w-full h-[300px] w-[220px] ">
            <View className="flex-row mx-[2%] justify-between mt-[4%]">
            <View></View>
            <InformationCircleIcon size={22} color="gray" />
            </View>
            <View className="items-center">
                <Text className="text-5xl font-bold text-gray-500">ARTIST</Text>
            </View>
              <View className="flex-col mb-[20%] items-center">
                  <Text>The first Nail text</Text>
                  <Text>The first description </Text>
            </View>
          </View>
          
    </View>
  );
}
