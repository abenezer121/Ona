import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import {
  BookmarkIcon,
  BellIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/solid";
import HomeItemCard from "./../../components/Intro/HomeItemCard";

export default function IntroScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="">
      <View className="flex-row w-full justify-between items-center  space-x-2 pb-2 px-4 mt-[3%]">
        <View className="flex-row items-center w-[80%] space-x-2  bg-gray-200 p-3 rounded">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Search"
            keyboardType="default"
          />
        </View>
        <BellIcon size={30} color="gray" />
      </View>
      <View className="mx-[2%] mt-[2%] ">
        <Text className="text-3xl font-bold">Top Concerts</Text>
        <View className="bg-gray-300 rounded mt-[3%] ">
          <View className="flex-row mx-[2%] justify-between mt-[4%]">
            <View></View>
            <BookmarkIcon size={22} color="gray" />
          </View>
          <View className="w-full flex-row justify-center mt-[10%]">
            <Text className="text-5xl font-bold text-gray-500">ARTIST</Text>
          </View>
          <View className="mt-[20%] bg-gray-400 pb-[5%] rounded-b ">
            <View className="flex-row justify-center mt-[3%]">
              <Text className="mt-[5px]">In theknl h;lkasdfhkl hlkhadlh</Text>
            </View>
            <View className="flex-row justify-center">
              <Text>In theknl h;lkasdfhkl hlkhadlh</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-[4%] mx-[3%]">
        <Text className="text-xl font-medium">Recommended For You</Text>
      </View>
      <View>
        <ScrollView
          className=" mt-[2%] space-x-5"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        >
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
        </ScrollView>
    </View>
          
    <View className="mt-[10%] mx-[3%]">
        <Text className="text-xl font-medium">Recommended For You</Text>
      </View>
      <View>
        <ScrollView
          className=" mt-[2%] space-x-5"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        >
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
        </ScrollView>
          </View>
          
          <View className="mt-[10%] mx-[3%]">
        <Text className="text-xl font-medium">Recommended For You</Text>
      </View>
      <View className="mb-[5%]">
        <ScrollView
          className=" mt-[2%] space-x-5"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        >
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
          <HomeItemCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
