import { StyleSheet } from 'react-native';
import { commonStyle } from '../../../config';
import { colors } from '../../../constant';

export default StyleSheet.create({
    imageOuterlayer: {
        height: 200,
        width: 200,
        backgroundColor: '#192259',
        borderRadius: 100,

        borderWidth: 25,
        borderColor: '#10194E',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: commonStyle.paddingInner
    },
    userImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    username: {
        ...commonStyle.fonts.semiBold20,
        color: colors.kWhite,
        width: '100%',
        textAlign: 'center'
    },
    reqFor: {
        marginTop: commonStyle.paddingOuter,
        ...commonStyle.fonts.regular15,
        color: colors.kWhite,
        width: '100%',
        textAlign: 'center'
    },
    reqPrice: {
        marginTop: commonStyle.paddingOuter,
        color: colors.kWhite,
        ...commonStyle.fonts.bold30
    },
    button: {
        paddingHorizontal: commonStyle.paddingOuter,
        height: 60,
        width: 180,
    }
});