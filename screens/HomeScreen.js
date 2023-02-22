import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Categories';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="bg-[#B2ECC4] flex-1 px-[36px]">
            <View className="flex-row justify-between pt-[63px]">
                <TouchableOpacity onPress={() => console.log("Menu Pressed")}>
                    <View className="flex items-center justify-center w-[30px] h-[30px] rounded-full">
                        <Image source={require("../assets/icons/Menu.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("User Pressed")}>
                    <View className="flex items-center justify-center w-[30px] h-[30px] rounded-full">
                        <Image style={{ width: 15, height: 15 }} source={require("../assets/icons/User.png")} />
                    </View>
                </TouchableOpacity>
            </View>

            <View className="flex justify-center items-center pt-[27px]">
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[#58B074] text-[14px]">Welcome Back, Shashank!</Text>
            </View>

            <View className="flex-col pt-[10px] items-center">
                <Text style={{ fontFamily: "PoppinsBold" }} className="text-[#02170E] text-[34px]">What do you</Text>
                <View className="flex-row">
                    <Text style={{ fontFamily: "PoppinsMediumItalic" }} className="text-[#02170E] text-[34px]">need</Text>
                    <Text style={{ fontFamily: "PoppinsBold" }} className="text-[#02170E] text-[34px]"> today?</Text>
                </View>
            </View>

            <Categories />

        </SafeAreaView>
    )
}

export default HomeScreen