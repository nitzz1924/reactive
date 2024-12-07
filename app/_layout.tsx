import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';

export default class RootLayout extends Component {
  render() {
    return (
    //  <Stack screenOptions={{
    //   headerStyle:{
    //     backgroundColor: "yellow",
    //   },
    //   headerTitleStyle:{
    //     fontWeight:"500"
    //   },
    //   headerShown:true,
    //  }}>
    //     <Stack.Screen name="(tabs)" />
    //     <Stack.Screen name='index'/>
    //     <Stack.Screen name='about'/>
    //  </Stack>
     <GestureHandlerRootView style={{flex:1}}>
        <Drawer/>
     </GestureHandlerRootView>
    )
  }
}
