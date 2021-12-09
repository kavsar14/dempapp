/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { LogBox } from 'react-native';

import store from './app/state/store';
import ActivityIndicatorComponent from './app/components/ActivityIndicatorComponent/ActivityIndicatorComponent';
import ToastMessage from './app/components/ToastMessage';
import DrawerNavigator from './app/navigations/drawer-navigation';
  
 LogBox.ignoreAllLogs();
 
 const App = () => {
   return (
     <Provider store={store}>
       <NavigationContainer>
          <ActivityIndicatorComponent />
          <ToastMessage />
          <DrawerNavigator />
       </NavigationContainer>
     </Provider>
   );
 };
 
 export default App;
 