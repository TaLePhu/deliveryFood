import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
          <Text style={tw`font-bold text-lgs`}>{title}</Text>
          <Text style={tw`text-gray-500 text-xs`}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={[{color: themeColors.text}, tw`font-semibold`]} >See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        style={tw`overflow-visible py-5`}
      >
      {
        restaurants.map((restaurant, index )=> {
          return(
            <RestaurantCard
              item={restaurant}
              key={index}
            />
          )
        })
      }
      </ScrollView>
    </View>
  )
}