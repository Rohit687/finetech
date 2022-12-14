import { commonStyle } from '../../config/commonStyle';
import { colors } from '../../constant/colors';
import { LanguageText } from '../../resource/languages/language';
import { AllIconsType, iconConstant } from '../../resource/vectorIcon';
import { NavigationHeaderLayout } from './headerView.component';

export const headerButtonKey = {
  back: 'back',
  menu: 'menu',
  addMoney: 'addMoney',
  searchPersionInput: 'searchPersionInput'
}

export const headerButtonType = {
  image: 'image',
  icon: 'icon',
  text: 'text'
}

export const headerItems = {
  defaultLeftMenu: [
    {
      key: headerButtonKey.menu,
      type: headerButtonType.icon, //image, icon,text
      icon: {
        vectorName: AllIconsType.featherIcons,
        name: iconConstant.featherMenu,
        size: 24,
        color: colors.menu
      },
      style: {
        backgroundColor: colors.menuBg,
        height: 40,
        borderRadius: 20
      }
    },
  ],
  defaultBack: [
    {
      key: headerButtonKey.back,
      type: headerButtonType.icon, //image, icon,text
      icon: {
        vectorName: AllIconsType.ioniconsIcons,
        name: iconConstant.ioniconsBack,
        size: 26,
        color: colors.kWhite
      }
    }
  ],
  addMoney: [
    {
      key: headerButtonKey.addMoney,
      type: headerButtonType.text, //image, icon,text
      width: 100,
      text: LanguageText('homeScreen').add,
      style: {
        backgroundColor: colors.tertiaryBg,
        height: 40,
        borderRadius: commonStyle.buttonBorder
      }
    },
  ]
}

export const headerComponent = () => ({
  backStep: 1, //Pop with step number
  headerTransparent: false,
  title: '',

  headerTitle: null,
  headerLeftArr: [],
  headerRightArr: [],
  showBottomNavigationBorder: false,
  // navigationDesc:'(desc)',
  // headerTitleAlign: 'left',
  headerTitleAlign: 'center',
  titleStyle: {
    color: colors.kWhite,
  },
  navigationBgColor: colors.navigationBg,
  // blur: 'light',    //null |"xlight"| "light"| "dark"  //For this need to install package "@react-native-community/blur"
  // navigationBgColor: 'red',
  // headerLeft: props => <LogoTitle {...props} />,
  // headerBgImage: getAssetByFilename(ImageSource.headerBg),
  // header: ({ options, navigation }) => NavigationHeaderLayout({
  //   options: options,
  //   navigation: navigation
  // })
  header: ({ route, options, navigation }) => NavigationHeaderLayout({
    route: route,
    options: options,
    navigation: navigation
  })
  // header: ({ scene, previous, navigation }) => NavigationHeaderLayout({
  //   options: scene != null && scene.descriptor,
  //   previous: previous,
  //   scene: scene,
  //   navigation: navigation
  // })

});

/* dummy data style
headerLeftArr: [
  {
    key: headerButtonType.VectorText,
    type: 'image', //image, icon,text
    source: getAssetByFilename(ImageSource.VectorText),
    width: 90//optional
  },
],
  headerRightArr: [
    {
      key: headerButtonType.menu,
      type: 'image', //image, icon,text
      source: getAssetByFilename(ImageSource.VectorText),
    },
    {
      key: headerButtonType.back,
      type: 'icon', //image, icon,text
      icon: <VectorIcon
        name={iconConstant.menu}
        size={18}
        color={colors.kBlack}
      // onPress={() => props.pickerCancel()}
      // style={{
      //   position: 'absolute',
      //   right: 20
      // }}
      />
    },
    {
      key: headerButtonType.explore,
      type: 'text', //image, icon,text
      text: 'Back',
    }
  ],
*/
