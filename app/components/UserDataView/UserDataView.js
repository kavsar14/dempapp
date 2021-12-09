import React from 'react';
import {
  Image,
  Text, View
} from 'react-native';
import styles from './styles';

const UserDataView = (props) => {
  const {
    title,
    avatar, 
    backgroundColor
  } = props;

  return (
     <View style={[styles.container, {backgroundColor: backgroundColor}]}>
         <Image source={{ uri: avatar }} style={styles.image}/>
         <Text style={styles.title}>{title}</Text>
     </View>
  )
};

export default UserDataView;

 