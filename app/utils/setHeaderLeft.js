
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import HeaderLeft from '../components/HeaderLeft';

export default setHeaderLeft = (iconUrl = '', onPress) => {
    const navigation = useNavigation()
     
    return <HeaderLeft iconUrl={iconUrl} onPress={() => {
        onPress ?
            onPress() :
            navigation.goBack()
    }} />
}