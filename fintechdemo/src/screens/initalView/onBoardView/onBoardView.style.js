import { StyleSheet } from 'react-native';
import { commonStyle, dimension } from '../../../config';
import { colors } from '../../../constant';

export default StyleSheet.create({
  container: {
    width: dimension.width,
    flexGrow: 1
  },
  listImage: {
    width: dimension.width,
    height: dimension.aspectRatio * 475,
    resizeMode: 'cover'
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 54,
    borderRadius: 0,
    borderTopRightRadius: 60,
    backgroundColor: colors.onboardingTextBg,
    padding: commonStyle.paddingOuter,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    marginTop: commonStyle.space15,
    ...commonStyle.fonts.bold18,
    color: colors.primary,
    width: '100%'
  },
  desc: {
    marginTop: 8,
    lineHeight: 25,
    ...commonStyle.fonts.regular15,
    color: colors.primary,
    width: '100%'
  }
});