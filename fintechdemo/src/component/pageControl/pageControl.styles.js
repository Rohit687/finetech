import { StyleSheet } from 'react-native';
import { colors } from '../../constant';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.kTranspearent
    },
    controllerStyle: {
        height: 10,
        // width: 18,
        width: 20,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5
    }
});