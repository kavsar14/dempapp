import React, { useLayoutEffect, useState } from 'react';
import {
   Alert,
   Image,
   SafeAreaView,
   StatusBar,
 } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CommonDataView from '../../components/CommonDataView/CommonDataView';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRight from '../../components/HeaderRight';

import { color } from '../../utils/color';
import styles from './styles'
import { images } from '../../assets/appImages';
import { Globals } from '../../utils/globals';
import { AuthAction } from '../../state/ducks/auth';
import setHeaderLeft from '../../utils/setHeaderLeft';
 
const SecondScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
         navigation.setOptions({
            headerLeft: () => setHeaderLeft(images.menu, ()=>{
               navigation.toggleDrawer();
            }),
            headerTitle: () => <HeaderTitle title={'SecondDemo'} />
         });
   }, [navigation])
    
   return (
      <>
         <StatusBar barStyle="default" backgroundColor={color.GREENTHEME} />
         <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            
         </SafeAreaView>
      </>
   );
 };

 export default SecondScreen;
 
  