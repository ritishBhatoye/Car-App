import React from 'react'
import { View,Text } from 'react-native'
import styles from './styles'

const Header=()=>{
    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
        </View>
    )
}