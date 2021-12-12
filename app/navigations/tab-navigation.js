import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { color } from '../utils/color';
import { routes } from '../utils/route';
import { images } from '../assets/appImages'
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: color.GREENTHEME
        },
        headerTitleStyle: {
            color: color.WHITE
        },
        headerShown: true,
        headerTintColor: color.WHITE
    }}
    tabBarOptions= {{
      activeTintColor: color.GREENTHEME,
      inactiveTintColor: color.BLACK
  }}
    >
        <Tabs.Screen name={routes.FIRSTSCREEN} component={FirstScreen} options={{
          title: 'First Demo',
          tabBarIcon: ({color}) => (
            <Image source={images.page} style={{height: 24, width: 24, tintColor: color}}/>
          )
        }}/>
        <Tabs.Screen name={routes.SECONDSCREEN} component={SecondScreen} options={{
          title: 'Second Demo',
          tabBarIcon: ({color}) => (
            <Image source={images.page} style={{height: 24, width: 24, tintColor: color}}/>
          )
        }}/>
    </Tabs.Navigator>
  );
}

export default TabNavigator;