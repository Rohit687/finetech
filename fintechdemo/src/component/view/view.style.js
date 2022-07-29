import { StyleSheet } from 'react-native';
import { colors } from '../../constant';

export default StyleSheet.create({
  bezierContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.secondaryBG,
    borderRadius: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bezierView: {
    width: 80,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.bezierLine
  }
});