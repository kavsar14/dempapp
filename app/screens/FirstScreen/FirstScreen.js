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

import { color } from '../../utils/color';
import { UsersAction } from '../../state/ducks/user';
 
const FirstScreen = ({navigation}) => {
  const [imagesData, setImagesData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: () => <HeaderTitle title={'First Demo'} />
    });
  }, [navigation])

  useEffect(()=>{
    setImagesData([]);
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

  const getIndexShowColor = (index) => {
    let color = '';

    for(let i = 0;i <= index; i = i+3){
      if(i == index) {
        color = 'red';
      }
    }

    for(let i = 1;i <= index; i = i+3){
      if(i == index) {
        color = 'yellow';
      }
    }

    for(let i = 2;i <= index; i = i+3){
      if(i == index) {
        color = 'green';
      }
    }

    return color;
  }

  const getImagesData = (page) => {
    const params = {
      page: page,
    }

    dispatch(UsersAction.getImagesData(params,
        (response) => {
            setIsRefresh(false);
            let data = [
              ...imagesData,
              ...response
            ]
            setImagesData(data);
        },
        (error) => {
          setIsRefresh(false);
            // console.log("login error ===>", error);
      }));
  }

  const renderListView = ({item, index}) => {
      const title = _.get(item, 'title', '');
      const avatar = _.get(item, 'url', '');
      let color = getIndexShowColor(index);
       
      return (
         <UserDataView 
           title={title}
           avatar={avatar}
           backgroundColor={color}
         />
      )
  }

  const onRefresh = () => {
    setImagesData([]);
    setIsRefresh(true);
  }

  const renderEmptyData = () => (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 16, lineHeight: 20, textAlign: "center" }}>{'No images data found'}</Text>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={color.GREENTHEME}/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <FlatList
              contentContainerStyle={{ flex: imagesData.length > 0 ? 0 : 1, paddingBottom: 88}}
              data={imagesData}
              renderItem={renderListView}
              refreshing={isRefresh}
              onRefresh={() => onRefresh()}
              keyExtractor={(_, index) => index.toString()}
              ListEmptyComponent={renderEmptyData}
              onEndReachedThreshold={0.5}
              onEndReached={() => { setPage(page + 1) }}
              initialNumToRender={15}
          />
      </SafeAreaView>
    </>
  );
};

export default FirstScreen;
 
  