import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/color'


function Home() {
  return (
   <View>
    <Text style ={styles.appName}>KNUST News</Text>
    <CategoryTextSlider />
   </View>
   
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        fontWeight:'bold',
        color:'green  '
        
    }
})

export default Home
