import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice'

export default function Dishrow({item}) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state=> selectCartItemsById(state, item.id));

  const handleDecrease = ()=>{
    dispatch(removeFromCart({id: item.id}))
  }
  const handleIncrease = ()=>{
    dispatch(addToCart({...item}))
  }

  return (
    <View style={tw`flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2`}>
      <Image style={[tw`rounded-3xl`, {width:100, height: 100}]}
            source={item.image}/>
      <View style={tw`flex flex-1 space-y-3`}>
        <View style={tw`pl-3`}>
          <Text style={tw`text-xl`}>{item.name}</Text>
          <Text style={tw`text-gray-700`}>{item.description}</Text>
        </View>
        <View style={tw`flex-row justify-between pl-3 items-center`}>
          <Text style={tw`text-gray-700 text-lg font-bold`}>
            $ {item.price}
          </Text>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems.length}
              style={[tw`p-1 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}
            >
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
            </TouchableOpacity>
            <Text style={tw`px-3`}>
              {totalItems.length}
            </Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={[tw`p-1 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}
            >
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}