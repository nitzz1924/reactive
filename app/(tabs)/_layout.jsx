import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
   <Tabs>
        <Tabs.Screen name='index' options={{title:"Home"}}/>
        <Tabs.Screen name='about' options={{title:"About"}}/>
        <Tabs.Screen name='profile' options={{title:"My Profile"}}/>
   </Tabs>
  )
}

export default TabLayout