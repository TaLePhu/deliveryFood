import { View, Text,ScrollView,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { categories } from '../constants'

export default function Categories() {
    const [activeCategory, setActiveCategory ] = useState(null);

  return (
    <View style={tw`mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`overflow-visible`}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        >
          {
            categories.map((category, index) => {
              let isActive = category.id==activeCategory;
              let btnClass = isActive ? tw`bg-gray-600` : tw`bg-gray-200`;
              let textClass = isActive ? tw`font-semibold text-gray-800` : tw`text-gray-500`;
              return(
                <View key={index} style={tw`flex justify-center items-center mr-6`}>
                  <TouchableOpacity 
                    onPress={() => setActiveCategory(category.id)}
                    style={[tw`p-1 rounded-full shadow bg-gray-200`, btnClass]}>
                      <Image style={{
                        width: 45, height: 45
                      }}
                          source={category.image} />
                      <Text style={[tw`text-sm`, textClass]}>{category.name}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
    </View>
  )
}