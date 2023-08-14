import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import CarItem from '../Caritem'
import {styles} from './styles'
import cars from './cars'
const CarList = () => {
  return (
    <View style={{width:"100%"}}>
     <FlatList
      data={cars}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> <CarItem car={item}/>}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
     />
    </View>
  )
}
export default CarList;