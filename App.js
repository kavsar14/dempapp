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
import TabNavigator from './app/navigations/tab-navigation';

import store from './app/state/store';
import ActivityIndicatorComponent from './app/components/ActivityIndicatorComponent/ActivityIndicatorComponent';
import ToastMessage from './app/components/ToastMessage';
  
 LogBox.ignoreAllLogs();
 
 const App = () => {
   return (
     <Provider store={store}>
       <NavigationContainer>
          <ActivityIndicatorComponent />
          <ToastMessage />
          <TabNavigator />
       </NavigationContainer>
     </Provider>
   );
 };
 
 export default App;
 