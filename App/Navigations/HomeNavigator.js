import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import Home from "../Screen/Home";

const Stack=createStackNavigator();


function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>  
        <Stack.Screen name="home" 
        component={Home}/>
        
    </Stack.Navigator>
  )
}

export default HomeNavigator