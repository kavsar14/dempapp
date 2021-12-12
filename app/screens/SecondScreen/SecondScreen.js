import React, { useLayoutEffect, useState } from 'react';
import {
   Alert,
   FlatList,
   Image,
   SafeAreaView,
   StatusBar,
   Text,
   View,
 } from 'react-native';
 import _ from 'lodash';

import HeaderTitle from '../../components/HeaderTitle';
import CommonButton from '../../components/CommonButton/CommonButton';

import { color } from '../../utils/color';
import styles from './styles'
import { Fonts, Globals } from '../../utils/globals';
 
const SecondScreen = ({navigation}) => {
   const [data, setData] = useState([]);
   const [fontSize, setFontSize] = useState(16);

    useLayoutEffect(() => {
         navigation.setOptions({
            headerTitle: () => <HeaderTitle title={'Second Demo'} />
         });
   }, [navigation])

   function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

   const pushRandomFontView = () => {
      let i = Math.floor(Math.random() * 5);
      let fontFamily = Fonts[i];
      console.log("family ",fontFamily);
      setData([
         ...data,
         {
            fontSize: fontSize,
            color: color.BLACK,
            font: fontFamily
         }
      ])
   }

   const pushRandomColorView = () => {
     let color = getRandomColor();
     setData([
        ...data,
        {
           fontSize: fontSize,
           color: color,
           font: ''
        }
     ])
   }

   const pushFontIncreasedView = () => {
      setData([
         ...data,
         {
            fontSize: fontSize + 1,
            color: color.BLACK,
            font: ''
         }
      ])
      setFontSize(fontSize + 1);
   }

   const renderListView = ({item, index}) => {
      const font = _.get(item, 'font', 'Comfortaa-Regular');
      const color = _.get(item, 'color', '');
      const fontSize = _.get(item, 'fontSize', '');
       
      return (
         <View style={styles.textView}>
            <Text style={[styles.title, {fontSize: fontSize, color: color, fontFamily: font}]}>Hello world!</Text>
         </View>
      )
   }
    
   return (
      <>
         <StatusBar barStyle="default" backgroundColor={color.GREENTHEME} />
         <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.buttonContainer}>
                <CommonButton 
                    buttonText={'Font'}
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonTextStyle}
                    onPressButton={() => pushRandomFontView()}
                />
                <CommonButton 
                    buttonText={'Text-size'}
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonTextStyle}
                    onPressButton={() => pushFontIncreasedView()}
                />
                <CommonButton 
                    buttonText={'Text-color'}
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonTextStyle}
                    onPressButton={() => pushRandomColorView()}
                />
            </View>
            <FlatList
               contentContainerStyle={{ marginHorizontal: 20, marginBottom: 10 }}
               data={data}
               renderItem={renderListView}
               keyExtractor={(item, index) => index.toString()}
            />
         </SafeAreaView>
      </>
   );
 };

 export default SecondScreen;
 
  