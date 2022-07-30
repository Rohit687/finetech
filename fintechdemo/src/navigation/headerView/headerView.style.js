import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderColor: colors.kTransparent,
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: options.navigationBgColor || ''
        backgroundColor: colors.kTransparent
    },
    buttonViewContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',

        // backgroundColor: 'orange',
    },
    button: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
});