import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/color'
import { Ionicons } from '@expo/vector-icons';
import color from '../Shared/color';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

function Home() {
  return (
   <View>
    <View style={{display:'flex',flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between'}}>
    <Text style ={styles.appName}>Ghana News</Text>
    <Ionicons name="notifications-outline" size={25} color="black" />
    </View>

      {/* Category List */}
      <CategoryTextSlider />


    <CategoryTextSlider />
      {/*Top Headline TopHeadlineSlider*/}
      <TopHeadlineSlider/>

   </View>
   
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:25,
        fontWeight:'bold',
        color:color.primary
        
    }
});

export default Home;
