import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { color } from '../utils/color';
import { routes } from '../utils/route';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
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
    >
        <Drawer.Screen name={routes.FIRSTSCREEN} component={FirstScreen} options={{
          headerShown: false,
          title: 'FirstDemo'
        }}/>
        <Drawer.Screen name={routes.SECONDSCREEN} component={SecondScreen} options={{
          headerShown: false,
          title: 'SecondDemo'
        }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;