import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer';
const DrawerLayout = () => {
  return (
   <Drawer>
        <Drawer.Screen name='index' options={{title:"Home"}}/>
        <Drawer.Screen name='drawerabout' options={{title:"About"}}/>
        <Drawer.Screen name='drawerprofile' options={{title:"My Profile"}}/>
   </Drawer>
  )
}

export default DrawerLayout