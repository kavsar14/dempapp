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
    backgroundColor,
    containerStyle,
    imageStyle
  } = props;

  if(backgroundColor == 'red') {
      return (
        <View style={[styles.redContainer, {backgroundColor: backgroundColor}]}>
            <Image source={{ uri: avatar }} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
        </View>
      )
  } else if(backgroundColor == 'yellow') {
    return (
      <View style={[styles.yellowContainer, {backgroundColor: backgroundColor}]}>
          <Image source={{ uri: avatar }} style={styles.circleImage}/>
          <Text style={styles.yellowTitle}>{title}</Text>
      </View>
     )
  } else {
    return (
      <View style={[styles.greenContainer, {backgroundColor: backgroundColor}]}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: avatar }} style={styles.image}/>
      </View>
    )
  }
};

export default UserDataView;

 