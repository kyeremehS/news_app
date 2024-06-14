import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, View, Image, Dimensions,Text } from 'react-native'
import GlobalApi from '../../Services/GlobalApi';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from '../../Shared/color';
import ReadNews from '../../Screen/ReadNews';
import { useNavigation } from '@react-navigation/native';

function TopHeadlineSlider({newsList}){
    
    const navigation = useNavigation()
    
    return (

        <View style={{marginTop:15}}>
            <FlatList 
                data={newsList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('read-news',{news:item})}
                    style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
                        <Image source={{uri: item.urlToImage}}
                        style={{height:Dimensions.get('screen').width*0.77,
                        borderRadius:10}}/>
                        <Text numberOfLines={3}style={{marginTop:10,fontSize:23,
                            fontWeight:'900'}}>{item.title}</Text>
                        <Text style={{marginTop:5,color:color.primary}}>{item?.source?.name}</Text>

                    </TouchableOpacity>
                )}
                keyExtractor={(item,index)=> index.toString()}
                />
        
        </View> 
    );
}

export default TopHeadlineSlider