import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { styled } from 'nativewind';
import { Twitch } from 'react-native-feather';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'


export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
      {/* Back button */}
      <View style={tw`relative py-4 shadow-sm`}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={[{backgroundColor: themeColors.bgColor(1)},
          tw`absolute z-10 rounded-full p-1 shadow top-5 left-2` ]}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'}/>
        </TouchableOpacity>
          <View>
            <Text style={tw`text-center font-bold text-xl`}>Your Cart</Text>
            <Text style={tw`text-center text-gray-500`}>{restaurant.name}</Text>
          </View>
      </View>

      {/* delivery time */}
      <View style={[{
        backgroundColor: themeColors.bgColor(0.2)},
        tw`flex-row px-4 items-center`
        ]}>
          <Image source={require('../assets/images/bikeGuy.png')}
                  style={tw`w-20 h-20 rounded-full`} />
          <Text style={tw`flex-1 pl-4`}>delivery in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text style={[tw`font-bold`, {color:themeColors.text}] }>
              Change
            </Text>
          </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        style={tw`bg-white pt-5`}
      >
        {
          restaurant.dishes.map((dish,index) => {
            return(
              <View key={index}
                style={tw`flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md`}
              >
                <Text style={[tw`font-bold mr-4`, {color: themeColors.text}]}>
                  2 x
                </Text>
                <Image source={dish.image} style={tw`h-14 w-14 rounded-full`}/>
                <Text style={tw`flex-1 font-bold text-gray-700`}>{dish.name}</Text>
                <Text style={tw`font-semibold text-base`}>${dish.price}</Text>
                <TouchableOpacity 
                  style={[tw`p-1 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}
                >
                  <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                </TouchableOpacity>
              </View>
            )
          })
        }

      </ScrollView>
      {/* total */}
      <View style={[tw`p-6 px-8 rounded-t-3xl space-y-4`, {backgroundColor: themeColors.bgColor(0.2)}]}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-700`}>Subtotal</Text>
          <Text style={tw`text-gray-700`}>$20</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-700`}>delivery fee</Text>
          <Text style={tw`text-gray-700`}>$2</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-700 font-extrabold`}>order Total</Text>
          <Text style={tw`text-gray-700 font-extrabold`}>$30</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPrepairing')}
            style={[tw`p-3 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}
          >
            <Text style={tw`text-center text-white font-bold text-lg`}>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}