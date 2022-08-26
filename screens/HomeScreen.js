import { View, Text , SafeAreaView , StatusBar, Image  , ImageBackground , TouchableOpacity } from 'react-native'
import React , {useLayoutEffect , useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon , ArrowRightIcon, AdjustmentsIcon , SearchIcon} from "react-native-heroicons/outline";
const image = { uri: "https://images.unsplash.com/photo-1593646631739-ccb520ef9257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" };
export default function HomeScreen() {
    const [position , setPosition] = useState(0)
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

   

    const title = [
        <Text className="text-white text-7xl font-medium ">Made with care</Text>,
        <Text className="text-white text-7xl font-medium ">Beauty experience</Text>,
        <Text className="text-white text-7xl font-medium ">Huge TIME SAVERS!</Text>
        
    ]
    const text = [
        "Handmade acrylic press ons, long lasting, non toxic and easy to remove.",
        "Explore the endless world of flexible styles and change your looks as often as you see fit.",
        "Would rather be doing something you feel more meaningful than spending all day at the nail salon."
    ]
    const buttonText = [
        "Next",
        "Next",
        "Get Started"
    ]

    
  return (
    
      <View className={ position == 0 ? "w-full h-screen bg-[#f6c735]" : position == 1 ? "w-full h-screen bg-[#86d9df]" : "w-full h-screen bg-[#f4d4e1]"  }>
      
          {/* <ImageBackground source={image} resizeMode="cover" className="w-full h-full flex-col justify-between" > */}
            <View  className="w-full h-full flex-col justify-between" >
              <View className="w-full flex-row justify-between mt-[5%]">
                  <Text></Text>
                  <TouchableOpacity className="mr-[5%]"><Text className="text-lg">Skip</Text></TouchableOpacity>
              </View>
              <View className=" ">
                  <View className="mt-[40%] mx-[7%]">
                      { title[position]}
                      <Text className="text-white text-xl ">{text[position]}</Text>
                  </View>
                  <View className="mt-[40%] flex-row justify-between ">
                      <Text className="text-white"></Text>
                      <View className="mr-[5%]">
                          <TouchableOpacity className="mb-[10%] ">
                          <Text className="py-4 px-10 bg-white rounded-full" onPress={() => { 
                        if (position == 0 || position == 1) {
                                setPosition(position + 1)
                            } else if (position == 2) {
                             navigation.navigate('Login')
                        }
                    }}>{buttonText[position]}</Text>
                      </TouchableOpacity>
                      </View>
                      
                  </View>
              </View>
            
            {/* </ImageBackground> */}
          </View>
          </View>
  )
}

