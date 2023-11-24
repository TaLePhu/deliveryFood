import { View, Text, TextInput, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native-web'
import * as Icon from "react-native-feather"
import tw from 'twrnc'
import { themeColors } from '../theme'
import Categories from '../components/categories'
import { featured } from '../constants'
import FeaturedRow from '../components/featuredRow'

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white`} >
      <StatusBar style={`dark-content`}/>
      {/* search bar */}
      <View style={tw`flex-row item-center space-x-2 px-4 pb-2`}>
        <View style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
          <Icon.Search height="25" width="25" stroke='gray'/>
          <TextInput placeholder="restaurant" style={tw`flex-1 ml-2`}/>
          <View style={tw`flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300`}>
            <Icon.MapPin height={20} width={20} stroke={'gray'}/> 
            <Text style={tw`text-gray-600`}>Ho Chi Minh</Text>
          </View>
        </View>
        <View style={[tw`p-3 bg-gray-300 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}>
          <Icon.Sliders height={20} width={20 } strokeWidth={2.5} stroke={'white'}/>
        </View>
      </View>

      {/* main  */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20
      }}>
        {/* categories */}
        <Categories/>

        {/* featured */}
        <View style={tw`mt-5`}>
          {
            [featured, featured, featured].map((item, index) => {
              return(
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>



      </ScrollView>
    </SafeAreaView>
  )
}