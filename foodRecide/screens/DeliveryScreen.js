import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import {useNavigation} from '@react-navigation/native'
import tw from 'twrnc'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather"



export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
  return (
    <View style={tw`flex-1`}>
      {/* map view */}
      <View style={tw`rounded-t-3xl mt-12 bg-white relative`}>
        <View style={tw`flex-row justify-between px-5 pt-10`}>
          <View>
            <Text style={tw`text-lg text-gray-700 font-extrabold`}>
              Estimated Arrival
            </Text>
            <Text style={tw`text-3xl text-gray-700 font-extrabold`}>
              20-30 Minutes
            </Text>
            <Text style={tw`mt-2 text-gray-700 font-extrabold`}>
              Your Order it own its way
            </Text>
          </View>
          <Image
            style={tw`h-24 w-24`}
            source={require('../assets/images/bikeGuy2.gif')}
          />
        </View>
        <View style={[
          tw`p-2 flex-row justify-between items-center rounded-full my-5 mx-2`,
          {backgroundColor: themeColors.bgColor(0.8)}
        ]}>
          <View style={[tw`p-1 rounded-full`,
                {backgroundColor: 'rgba(255,255,255,0.4)'}]}>
            <Image
              style={tw`h-16 w-16 rounded-full`}
              source={require('../assets/images/deliveryGuy.png')}
            />
          </View>
          <View style={tw`flex-1 ml-3`}>
            <Text style={tw`text-lg font-bold text-white`}>
              No Name
            </Text>
            <Text style={tw`font-semibold text-white`}>
              Your Rider
            </Text>
          </View>
          <View style={tw`flex-row items-center space-x-3 mr-3`}>
            <TouchableOpacity style={tw`bg-white p-2 rounded-full`}>
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
            </TouchableOpacity>.
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={tw`bg-white p-2 rounded-full`}>
              <Icon.X stroke={'red'} strokeWidth={4}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}