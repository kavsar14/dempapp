
import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 20,
        tintColor: color.GREY
    },
    button: {
        backgroundColor: color.YELLOW,
        width: '28%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 30,
        justifyContent: "space-between"
    },
    buttonTextStyle: {
        color: color.BLACK
    },
    textView: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      padding: 10,
      marginVertical: 5
    },
    title: {
      fontSize: 16,
      fontFamily: 'Comfortaa-Regular'
    }
});

export default styles;