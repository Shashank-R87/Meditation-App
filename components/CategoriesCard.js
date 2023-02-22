import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoriesCard = ({width, color, title, ar }) => {
    return (
        <View style={{
            backgroundColor:color,
            width: width,
            height: width/ar,
            borderRadius:25,
            marginBottom:10
        }}>
            {/* <Image className={`w-[${158}px] h-[${158/(aspectratio)}px] rounded-[25px]`} source={{ uri: imgUrl }} /> */}
            {/* <View className={`absolute pt-[213px] pl-[25px] w-[${width}px] h-[${width*ar}px] bg-[${color}]`}>
                <Text style={{ fontFamily: "PoppinsRegular" }} className="text-[16px] text-[#FFFEFF]">{title}</Text>
                <Text style={{ fontFamily: "PoppinsRegular" }} className="text-[16px] text-[#FFFEFF]">Meditation</Text>
            </View> */}
        </View>
    )
}

{/* <ImageBackground style={{ height: width / ar }} imageStyle={{ borderRadius: 25 }} className={`w-[158px] rounded-[25px] mb-[10px]`} source={{ uri: imgUrl }}>
<View className="absolute top-[148px] left-[20px]">
    <Text style={{ fontFamily: "PoppinsRegular" }} className="text-[16px] text-[#FFFEFF]">{title}</Text>
</View>
</ImageBackground> */}
export default CategoriesCard