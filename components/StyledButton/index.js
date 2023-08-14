import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton=(props)=>{
    
const type=props.type;
    
const backgroundColor=type==='primary'?'#171A20CC':'#FFFFFFA6';
const textColor=type==='primary'?'#FFFFFF':'#171A20';
const name=type==='primary'?'Custom Order':'Existing Inventory';
const click=type==='primary'?'Custom Order is pressed':'Existing Inventory is pressed';

  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button,{backgroundColor:backgroundColor}]}
      onPress={()=>{
      console.warn(`${click}`);
      }}
      >
    <Text style={[styles.text,{color:textColor}]}>{name}</Text>
      </Pressable>
    </View>
  )
}
export default StyledButton;
