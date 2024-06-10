import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View,Text, Image } from 'react-native'
import color from '../Shared/color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function ReadNews() {
     const news=useRoute().params.news;


     useEffect(()=>{
        console.log(news)
     },[])


  return (
    <View style={{backgroundColor:color.white,flex:1}}> 
        <Image source={{uri:news.urlToImage}} style={{width:'100%',height:300,borderRadius:15}}/>
        <Text style={{marginTop:10,color:color.primary,fontSize:16}}>{news.source.name}</Text>

        <Text style={{marginTop:10,fontSize:22,fontWeight:'bold'}}>{news.title}</Text>
        <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{news.description}</Text>
    </View>
  )
}

export default ReadNews