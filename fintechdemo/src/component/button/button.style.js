import { StyleSheet } from 'react-native';
import { commonStyle } from '../../config';
import { colors, interFontFamily } from '../../constant';

export default StyleSheet.create({
    continueContainer: {
        height: 50,
        paddingHorizontal: commonStyle.paddingInner,
        borderRadius: commonStyle.buttonBorder,
        backgroundColor: colors.primaryButton,
        overflow: 'hidden',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    continueSecondaryContainer: {
       backgroundColor:colors.kTransparent,
       borderColor:colors.secondaryButton,
       borderWidth:1
    },
    continueSecondaryText: {
        color: colors.secondaryButton,
     },
    continueTextStyle: {
        textAlign: 'center',
        color: colors.kWhite,
        ...commonStyle.fonts.bold16

    },
});