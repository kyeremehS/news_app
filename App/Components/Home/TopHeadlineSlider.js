import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'

function TopHeadlineSlider(){
    const [newsList, setNewsList]=useState([])

    useEffect(()=>{
        getTopHeadline();

    },[])

    const getTopHeadline=async()=>{
        const result = (await GlobalApi.getTopHeadline).data;
    console.log(result);
    setNewsList(result.articles)
    }
    return (
        <View>
            <FlatList>
                data={newsList}
                renderItem={({item})=>(
                    <TouchableOpacity style={{width:Dimensions.get('screen'.width*0.80)}}>
                        <Image source={{uri:item.urlToImage}}
                        style={{height:350}}/>
                    </TouchableOpacity>
                )
                }
            </FlatList>
        </View>
    )
}

export default TopHeadlineSlider