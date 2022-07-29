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
    continueTextStyle: {
        textAlign: 'center',
        color: colors.kWhite,
        ...commonStyle.fonts.bold16

    },
});