import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View,Text, Image, Share,Button } from 'react-native'
import color from '../Shared/color';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


function ReadNews() {
     const news=useRoute().params.news;
     const navigation = useNavigation();
     const shareNews=()=>{
       Share.share({
        message:news.title+"\nRead More"+news.description
       })
     }

     useEffect(()=>{
        console.log(news)
     },[])


  return (
    <ScrollView style={{backgroundColor:color.white,flex:1}}> 
        <View style={{marginTop:10, marginBottom:10, display:'flex'
      ,flexDirection:'row',justifyContent:'space-between'}}>

      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name='arrow-back' size={28} color='black'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>shareNews()}>
      <Ionicons name='share-outline' size={28} color='black'/>
      </TouchableOpacity>
      </View>
        <Image source={{uri:news.urlToImage}} style={{width:'100%',height:300,borderRadius:15}}/>
        <Text style={{marginTop:10,color:color.primary,fontSize:16}}>{news.source.name}</Text>
        <Text style={{marginTop:10,fontSize:22,fontWeight:'bold'}}>{news.title}</Text>
        <Text style={{marginTop:10,fontSize:16,color:color.gray,
          lineHeight:30}}
          >{news.description}</Text>

          <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop:10,color:color.primary,
          fontSize:16,fontWeight:'bold'}}>Read More</Text>
       </TouchableOpacity>
    </ScrollView>
  )
}

export default ReadNews