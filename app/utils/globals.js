import { Dimensions } from "react-native";
import _ from 'lodash';

const { width, height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;

export const isIOS = () => {
    return Platform.OS === 'ios' ? true : false
}

export const getUpperCase = (value) => {
    return value.toUpperCase();
}

export const Globals = {
    // Keys
    kUserToken: '',
    kRefreshToken: '',
};

export const Fonts = [ 
    'Comfortaa-Bold',
    'Comfortaa-Light',
    'Comfortaa-Medium',
    'Comfortaa-Regular',
    'Comfortaa-SemiBold',
];
