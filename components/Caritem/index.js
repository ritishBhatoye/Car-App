import { View, Text ,ImageBackground} from 'react-native'
import React from 'react'
import styles from './styles'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import StyledButton from '../StyledButton'
const CarItem=(props)=>{
 
  const{name,tagline,taglineCTA,image}=props.car;
  return (
    <View style={styles.carContainer}>
    <ImageBackground 
    source={image}
    style={styles.image} />
   <View style={styles.titles}>
     <Text style={styles.title}>{name}</Text>
     <Text style={styles.subtitle}>{tagline}&nbsp;
     <Text style={styles.subtitleCTA}>
        {taglineCTA}
        </Text>
     </Text>
   </View>
   <StyledButton 
    type="primary"
    onPress={()=>{
        console.warn("Custom Order was pressed")
    }}
   />
   <StyledButton type="secondary" />

  </View>

  )
}
export default CarItem;