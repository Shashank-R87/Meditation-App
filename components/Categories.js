import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'
import items from "./items"

const width = 158;

const Categories = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} className="mt-[54px]">
            <View className="flex-row justify-between">
                <View className="pt-[20px] pb-[50px]">
                    {
                        items.filter((_,i)=>i%2===0).map(item=><CategoriesCard width={width} color={item.color} title={item.title} ar={item.ar} key={item.id} />)
                    }
                </View>
                <View className="pt-[52px] pb-[50px]">
                    {
                        items.filter((_,i)=>i%2!==0).map(item=><CategoriesCard width={width} color={item.color} title={item.title} ar={item.ar} key={item.id} />)
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Categories