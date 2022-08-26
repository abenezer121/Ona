import { View, Text  , SafeAreaView , ImageBackground } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DesignLineCard from '../../components/DesignLIne/DesignLineCard';
import DesignLineWideCard from '../../components/DesignLIne/DesignLineWideCard';
import {
    HeartIcon,
    ShoppingCartIcon,
    SearchIcon,
    BellIcon
} from "react-native-heroicons/solid";
  const image = { uri: "https://images.unsplash.com/photo-1593646631739-ccb520ef9257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" };
   

export default function DesignLineScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
      <ScrollView className="h-full w-full ">
      
        <View  className="w-full flex-row justify-between mt-[5%] ">
              <View></View>
              <View className="flex-row mx-[4%]">
                  {/* <HeartIcon size={25} color="gray" /> */}
                  <ShoppingCartIcon size={25} color = "gray"/>
              </View>
        </View>
        <View className="mx-[5%] mt-[10%]">
              <Text className="text-4xl font-bold">Explore</Text>
        </View>
        <View className="flex-row w-full justify-between items-center  space-x-2 pb-2 px-4 mt-[3%]">
            <View className="flex-row items-center w-full space-x-2  bg-gray-200 p-3 rounded-full">
                <SearchIcon color="gray" size={20} />
                <TextInput
                    placeholder="Search"
                    keyboardType="default"
                />
            </View>
        </View>
        <View className="flex-row justify-center w-full h-[600px] rounded mt-[5%]">                 
              <ImageBackground imageStyle={{ borderRadius: 6 }} source={image} resizeMode="cover" className=" ml-[3%] w-[97%] flex-col justify-center rounded-full" >
                  <View className="flex-row justify-center">
                      <Text className="text-white text-4xl font-bold">Designer Collection</Text>
                  </View>
                  <View className="flex-row justify-center">
                        <Text className="text-2xl text-white ">Up To 70%</Text> 
                  </View>
                  
            </ImageBackground>
        </View>
              
        <View className="flex-row justify-center w-full h-[600px] rounded mt-[5%]">                 
              <ImageBackground imageStyle={{ borderRadius: 6 }} source={image} resizeMode="cover" className=" ml-[3%] w-[97%] flex-col justify-center rounded-full" >
                  <View className="flex-row justify-center">
                      <Text className="text-white text-4xl font-bold">Designer Collection</Text>
                  </View>
                  <View className="flex-row justify-center">
                        <Text className="text-2xl text-white ">Up To 70%</Text> 
                  </View>
                  
            </ImageBackground>
        </View>
        <View className="flex-row justify-center w-full h-[600px] rounded mt-[5%]">                 
            <ImageBackground imageStyle={{ borderRadius: 6 }} source={image} resizeMode="cover" className=" ml-[3%] w-[97%] flex-col justify-center rounded-full" >
                  <View className="flex-row justify-center">
                      <Text className="text-white text-4xl font-bold">Designer Collection</Text>
                  </View>
                  <View className="flex-row justify-center">
                        <Text className="text-2xl text-white ">Up To 70%</Text> 
                  </View>
                  
            </ImageBackground>
        </View>
        <View className="mb-[2%] flex-row justify-center w-full h-[600px] rounded mt-[5%]">                 
             <ImageBackground imageStyle={{ borderRadius: 6 }} source={image} resizeMode="cover" className=" ml-[3%] w-[97%] flex-col justify-center rounded-full" >
                  <View className="flex-row justify-center">
                      <Text className="text-white text-4xl font-bold">Designer Collection</Text>
                  </View>
                  <View className="flex-row justify-center">
                        <Text className="text-2xl text-white ">Up To 70%</Text> 
                  </View>
                  
            </ImageBackground>
    </View>
    
        
           
         
        
        
        
      </ScrollView>
  )
}


