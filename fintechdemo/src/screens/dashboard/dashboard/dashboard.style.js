import { StyleSheet } from 'react-native';
import { commonStyle } from '../../../config';
import { colors } from '../../../constant';
import { transationStatusById } from './dashboard.json';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1
  },
  headerContainer: {
    backgroundColor: colors.primaryBg,
    width: '100%',
    padding: commonStyle.paddingInner,
    paddingTop: commonStyle.paddingOuter,
    paddingBottom: commonStyle.space40
  },
  headerPriceTitle: {
    color: colors.kWhite,
    ...commonStyle.fonts.regular15
  },
  headerPrice: {
    marginTop: commonStyle.space8,
    color: colors.kWhite,
    ...commonStyle.fonts.bold30
  },
  headerButtonContainer: {
    marginTop: commonStyle.space10,
    flexDirection: 'row',
    width: '100%'
  },
  transationHeaderContainer: {
    backgroundColor: colors.primaryBg,
    width: '100%',
  },
  transationHeaderInnerContainer: {
    backgroundColor: colors.secondaryBG,
    width: '100%',
    paddingHorizontal: commonStyle.paddingInner,
    flexDirection: 'row',
    paddingBottom: commonStyle.space40,
    alignItems:'center'
  },
  transationHeaderTitle: {
    color: colors.kWhite,
    flex: 1,
    ...commonStyle.fonts.semiBold15,
    textAlign: 'left'
  },
  transationHeaderSortBy: {
    color: colors.secondaryButton,
    width: 63,
    // backgroundColor: 'yellow',
    ...commonStyle.fonts.regular15,
    textAlign: 'left'
  },
  transationHeaderSortByValue: {
    color: colors.kWhite,
    width: 55,
    // backgroundColor: 'green',
    ...commonStyle.fonts.regular15,
    textAlign: 'left'
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: commonStyle.paddingInner,
    paddingVertical: commonStyle.space15,
    alignItems: 'center',
    backgroundColor: colors.primaryBg
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden'
  },
  itemBodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: commonStyle.space15
  },
  itemBodyUserName: {
    ...commonStyle.fonts.semiBold15,
    color: colors.listTitle,
    width: '100%',
    textAlign: 'left'
  },
  statusContainer: (id) => ({
    flexDirection: 'row',
    backgroundColor: transationStatusById(id).color,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    paddingHorizontal: commonStyle.space8,
    marginTop: commonStyle.space8
  }),
  statusText: {
    ...commonStyle.fonts.regular13,
    color: colors.kWhite,
    marginLeft: commonStyle.space5
  },
  statusIcon: {
    height: 20,
    width: 20,
    backgroundColor: colors.kWhite,
    borderRadius: 10,
    lineHeight: 20,
    textAlign: 'center'
  },
  itemBodyPrice: (id) => ({
    color: transationStatusById(id).color,
    maxWidth: 100,
    ...commonStyle.fonts.bold14,
  }),
});