import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, Dimensions} from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/color'
import { Ionicons } from '@expo/vector-icons';
import color from '../Shared/color';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {

  const [newsList, setNewsList]=useState([])
  const [loading, setLoading]=useState(true)
    useEffect(()=>{
        getTopHeadline();
        getNewsByCategory('latest')

    },[])


    const getNewsByCategory=async(category)=>{
      setLoading(true)
      const result = (await GlobalApi.getByCategory(category)).data;
      setNewsList(result.articles);
      setLoading(false)
    }

    
    const getTopHeadline=async()=>{
        const result = (await GlobalApi.getTopHeadline).data;
        console.log(result)
        setNewsList(result.articles);
    }  
  
  return (
   <ScrollView
   style={{backgroundColor:Color.white}}>
    
    <View style={{display:'flex',flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between'}}>
    <Text style ={styles.appName}>World News</Text>
    <Ionicons name="notifications-outline" size={25} color="black" />
    </View>

      {/* Category List */}
      <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)} />

      {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.45}} size={'large'} color={Color.primary}/>:
    <View>
      {/*Top Headline TopHeadlineSlider*/}
      <TopHeadlineSlider newsList={newsList}/>   

      
      <HeadlineList newsList={newsList}/>
      </View>
    }    
    
   </ScrollView>
   
   
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


