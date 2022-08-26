
import { View, Text , ScrollView } from 'react-native'
import React , { useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import DesignLineCard from '../../components/DesignLIne/DesignLineCard';
import DesignLineWideCard from '../../components/DesignLIne/DesignLineWideCard';

export default function LearnScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
      <ScrollView className="w-full h-full">
          <View className="mx-[3%] mt-[3%]">
              <Text className="text-3xl font-bold">Design Line</Text>
          </View>
          <View>
            <ScrollView
                className=" mt-[2%] space-x-5"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}>
                <DesignLineCard />
                <DesignLineCard />
                <DesignLineCard />
                <DesignLineCard />
            </ScrollView>
          </View>
            <View className="mx-[3%] mb-[10%]">
                <Text className="text-2xl font-bold mt-[7%]">Your Rsvps</Text>
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                <DesignLineWideCard />
                
              
            </View>
    </ScrollView>
  )
}




