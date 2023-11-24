import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { styled } from 'nativewind';
import { Twitch } from 'react-native-feather';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather"

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
  return (
    <View style={tw`bg-white flex-1`}>
      {/* Back button */}
      <View style={tw`relative py-4 shadow-sm`}>
        <TouchableOpacity 
          style={[{backgroundColor: themeColors.bgColor(1)},
          tw`absolute z-10 rounded-full p-1 shadow top-5 left-2` ]}
        >
          
        </TouchableOpacity>

      </View>
    </View>
  )
}