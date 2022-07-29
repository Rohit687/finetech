import { StyleSheet } from 'react-native';
import { commonStyle, dimension } from '../../../config';
import { colors } from '../../../constant';

export default StyleSheet.create({
  userContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: colors.primaryBg,
    width: '100%',
  },
  userInnerContainer: {
    width: '100%',
    paddingTop: commonStyle.space12,
    backgroundColor: colors.secondaryBG,
    paddingHorizontal: commonStyle.paddingInner,
    paddingBottom: commonStyle.space40,
    alignItems: 'center'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  username: {
    marginTop: commonStyle.space12,
    ...commonStyle.fonts.semiBold20,
    color: colors.kWhite,
    width: '100%',
    textAlign: 'center'
  },
  userPhone: {
    marginTop: commonStyle.space10,
    ...commonStyle.fonts.regular15,
    color: colors.kWhite,
    width: '100%',
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: commonStyle.paddingOuter,
    height: 60,
    width: 180,
  },

  searchContainer: {
    paddingVertical: commonStyle.paddingInner,
    width: dimension.width,
    height: dimension.width + 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  searchCircle: (imageSize) => ({
    width: imageSize,
    height: imageSize,
    resizeMode: 'contain'
  })
});