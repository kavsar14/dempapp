
import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const commonConatiner = {
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 5,
    padding: 8,
    borderWidth: 1,
    height: 180
}

const styles = StyleSheet.create({
    redContainer: {
        ...commonConatiner,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: color.RED,
    },
    yellowContainer: {
        ...commonConatiner,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: color.YELLOW
    },
    greenContainer: {
        ...commonConatiner,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: color.GREEN
    },
    title: {
        fontSize: 16,  
        color: color.BLACK,
        fontWeight: '300',
        width: '50%'
    },
    image: {
        height: 100,
        width: 100,
        borderColor: color.BLACK,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        zIndex: 5000
    },
    circleImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: color.BLACK,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        zIndex: 5000
    },
    yellowTitle: {
        fontSize: 16,  
        color: color.BLACK,
        fontWeight: '300',
        width: '80%',
        marginTop: 10,
        alignSelf: 'center'
    }
});

export default styles;