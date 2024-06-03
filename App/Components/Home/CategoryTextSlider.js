import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import color from '../../Shared/color';

function CategoryTextSlider() {

  const [active,setActive] = useState(1)
  const categoryList=[
    {
      id:1,
      name:'Latest'
    },
    {
      id:2,
      name:'World'
    },
    {
      id:3,
      name:'Business'
    },
    {
      id:4,
      name:'Sports'
    },
    {
      id:5,
      name:'life'
    },
    {
      id:6,
      name:'Movie'
    },
  

  ];

  const onCategoryClick=(id)=>{
    setActive(id);
  };

  return (
    <View style={{marginTop:10 }}>
        <FlatList
        data = {categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> item.id.toString()} 
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>onCategoryClick(item.id)}>

            <Text style={
              item.id == active? styles.selectText 
              :styles.unselectText}>{item.name}</Text>
          </TouchableOpacity>

        )}
          
        
        />

    </View>
  );
}

const styles = StyleSheet.create({
  unselectText:{
    marginRight:30,
    fontSize:20,
    fontWeight:'800',
    color:color.gray
  },
  selectText:{
    marginRight:15,
    fontSize:20,
    fontWeight:'900',
    color:color.primary
  },

});

export default CategoryTextSlider;