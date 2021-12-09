import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
   SafeAreaView,
   Text,
   StatusBar,
   View,
   FlatList
 } from 'react-native';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { useIsFocused } from '@react-navigation/native';

import HeaderTitle from '../../components/HeaderTitle';
import UserDataView from '../../components/UserDataView/UserDataView';
import CommonButton from '../../components/CommonButton/CommonButton';

import { color } from '../../utils/color';
import { images } from '../../assets/appImages';
import setHeaderLeft from '../../utils/setHeaderLeft';
import { UsersAction } from '../../state/ducks/user';
import styles from './styles'
import { routes } from '../../utils/route';
 
const FirstScreen = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => setHeaderLeft(images.menu, ()=>{
           navigation.toggleDrawer();
        }),
        headerTitle: () => <HeaderTitle title={'FirstDemo'} />
    });
  }, [navigation])

  useEffect(()=>{
    setUserData([]);
    if(isFocused) {
      setPage(1);
      getImagesData(1);
    }
  },[isFocused])

  useEffect(() => {
    if (page > 1) {
      getImagesData(page);
    }
  }, [page])

  useEffect(() => {
    if (isRefresh) {
      setPage(1);
      getImagesData(1);
    }
  }, [isRefresh]);

  const getImagesData = (page) => {
    const params = {
      page: page,
    }

    dispatch(UsersAction.getImagesData(params,
        (response) => {
            setIsRefresh(false);
            let data = [
              ...userData,
              ...response.data
            ]
            setUserData(data);
        },
        (error) => {
          setIsRefresh(false);
            // console.log("login error ===>", error);
      }));
  }

  const renderListView = ({item}) => {
      const title = _.get(item, 'title', '');
      const avatar = _.get(item, 'url', '');
       
      return (
         <UserDataView 
           title={title}
           avatar={avatar}
         />
      )
  }

  const onRefresh = () => {
    setUserData([]);
    setIsRefresh(true);
  }

  const renderEmptyData = () => (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 16, lineHeight: 20, textAlign: "center" }}>{'No data found'}</Text>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={color.GREENTHEME}/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <FlatList
              contentContainerStyle={{ flex: userData.length > 0 ? 0 : 1, paddingBottom: 88}}
              data={userData}
              renderItem={renderListView}
              refreshing={isRefresh}
              onRefresh={() => onRefresh()}
              keyExtractor={(_, index) => index.toString()}
              ListEmptyComponent={renderEmptyData}
              onEndReachedThreshold={0.5}
              onEndReached={() => { setPage(page + 1) }}
          />
      </SafeAreaView>
    </>
  );
};

 export default FirstScreen;
 
  