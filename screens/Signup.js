import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React , {useLayoutEffect , useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { UserIcon , PhoneIcon } from "react-native-heroicons/outline";


export default function Signup() {

    const navigation = useNavigation();
    
     const [isSelected, setSelection] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    const image = { uri: "https://images.unsplash.com/photo-1593646631739-ccb520ef9257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" };
    return (
        <View className="w-full h-screen">
            <ImageBackground source={image} resizeMode="cover" className="w-full h-full" >
              <View className=" h-[90%]  mt-[25%]  mx-[10%]  flex-col justify-between">
                    <View className="mt-[10%]">
                        <Text className="text-white text-4xl font-medium ">Style<Text className="font-bold">On</Text></Text>
              <Text className="text-white text-4xl font-medium mt-[5%]">Create Account</Text>
                      
                        <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[10%] rounded-full">
                            <UserIcon size={22} color ="#fff" className="ml-2"/>
                            <TextInput
                                className="text-white py-2"
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
                        </View>
                        <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[5%] rounded-full">
                            <UserIcon size={22} color ="#fff"/>
                            <TextInput
                               className="text-white py-2" 
                                placeholder="Password"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
              </View>
              <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[5%] rounded-full">
                            <PhoneIcon size={22} color ="#fff"/>
                            <TextInput
                               className="text-white py-2" 
                                placeholder="Phone"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
              </View>
              <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[5%] rounded-full">
                            <UserIcon size={22} color ="#fff"/>
                            <TextInput
                               className="text-white py-2" 
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
              </View>
              
                        
                        <TouchableOpacity className="flex-row justify-center w-full  space-x-2  bg-gray-200 p-3 mt-[10%] rounded-full">
                            <View className="mx-auto">
                                <Text className="font-bold text-xl py-1">Sign Up</Text>
                            </View>
              </TouchableOpacity>
              
                     
              
              <View className="flex-row mt-[5%]">
                            <Text className="text-white text-xl ">Already have an account ? </Text><TouchableOpacity className="mx-[1%]" onPress={() => { navigation.navigate('Login') }}>
                                <Text className="text-gray-200 text-xl">Sign In</Text></TouchableOpacity>
                        </View>
                       
                    </View>
                        
                    </View>
                   <View className="flex-row items-center space-x-2 pb-2 px-4">
                
                  
                </View>
            </ImageBackground>
        </View>
    )
}