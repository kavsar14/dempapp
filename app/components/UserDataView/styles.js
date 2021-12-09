
import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: color.RED,
        borderRadius: 0,
        marginVertical: 0.5,
        padding: 8,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: color.LIGHTGREY,
        height: 150
    },
    title: {
        fontSize: 16,  
        color: color.BLACK,
        fontWeight: '300'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: color.BLACK,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0
    }
});

export default styles;