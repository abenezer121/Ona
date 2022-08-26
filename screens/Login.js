import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React , {useLayoutEffect , useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { UserIcon , ChevronDownIcon, AdjustmentsIcon , SearchIcon} from "react-native-heroicons/outline";


export default function Login() {

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
                    <View className="mt-[40%]">
                        <Text className="text-white text-4xl font-medium ">Style<Text className="font-bold">On</Text></Text>
                        <Text className="text-white text-4xl font-medium mt-[10%]">Sign In</Text>
                        <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[10%] rounded-full">
                            <UserIcon size={22} color ="#fff" className="ml-2"/>
                            <TextInput
                                className="text-white py-2"
                                placeholder="Username"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
                        </View>
                        <View className="flex-row flex-1 space-x-2 items-center  border-b-2 border-white p-3 mt-[10%] rounded-full">
                            <UserIcon size={22} color ="#fff"/>
                            <TextInput
                               className="text-white py-2" 
                                placeholder="Password"
                                placeholderTextColor="#fff"
                                keyboardType='default'
                            />
                        </View>
                        <View className="flex-row justify-between mt-[5%]">
                            
                            <View className="flex-row items-center">
                                <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                />
                            <Text className="text-white text-xl ml-[4%]">Remeber Me</Text>
                            </View>
                            <Text className="text-white text-xl">Forgot Passowrd?</Text>
                       </View>
                        <TouchableOpacity className="flex-row justify-center w-full  space-x-2  bg-gray-200 p-3 mt-[10%] rounded-full" onPress={() => {
                            navigation.navigate('Intro')
                        }}>
                            <View className="mx-auto">
                                <Text className="font-bold text-xl py-1">Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text className="text-white text-xl mt-[10%]">Dont have an account ? <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
                                <Text className="text-gray-200 text-xl">Create an Account</Text></TouchableOpacity></Text>
                        </View>
                    </View>
                        
                    </View>
                   <View className="flex-row items-center space-x-2 pb-2 px-4">
                
                  
                </View>
            </ImageBackground>
        </View>
    )
}