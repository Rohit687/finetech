import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyle } from '../../config/commonStyle.js';
import { AppConstant } from '../../constant/AppConstant.js';
import { colors } from '../../constant/colors.js';
import { AllIcons } from '../../resource/vectorIcon/index.js';
import { getNavigationDrawer, pop } from '../navigators/TopNavigatorRef.js';
import { headerButtonKey, headerButtonType } from "./header.json.js";
import styles from './headerView.style';

export const NavigationHeaderLayout = (props) => {
  const { options } = props;

  const itemConst = {
    height: AppConstant.getStatusData().top + AppConstant.getStatusData().headerHeight,
    contentNonHeight: AppConstant.getStatusData().top,
    contentHeight: AppConstant.getStatusData().headerHeight,
    defaultWidth: 40,
    defaultSpace: 2,
    paddingHorizontal: 12,
    headerTitleAlign: options.headerTitleAlign == null ?
      (Platform.OS == 'ios' ? 'center' : 'left') : options.headerTitleAlign
  }

  const bodySideSpaceL = (options.headerLeftArr != null ?
    Object.values(options.headerLeftArr).reduce((t, { width }) => t + (width || itemConst.defaultWidth), (options.headerLeftArr.length - 1) * itemConst.defaultSpace)
    : 0);
  const bodySideSpaceR = (options.headerRightArr != null ?
    Object.values(options.headerRightArr).reduce((t, { width }) => t + (width || itemConst.defaultWidth), (options.headerRightArr.length - 1) * itemConst.defaultSpace)
    : 0);

  const bodySideSpace = bodySideSpaceL > bodySideSpaceR ? bodySideSpaceL : bodySideSpaceR;

  return (

    <View style={[styles.mainContainer, {
      height: itemConst.height,
      paddingTop: itemConst.contentNonHeight,
      backgroundColor: options.navigationBgColor || 'transparent',
      borderBottomWidth: (options.showBottomNavigationBorder == null || options.showBottomNavigationBorder) ? 1 : 0
    }]}>


      <View style={[styles.container, {
        height: itemConst.contentHeight,
        marginHorizontal: itemConst.paddingHorizontal,
      }]}>

        {/* left */}
        {options.headerLeftArr != null && options.headerLeftArr.length > 0 &&
          navigationHeaderButtonLayout(options, props.route, itemConst, options.headerLeftArr)
        }

        {/* right */}
        {options.headerRightArr != null && options.headerRightArr.length > 0 &&
          navigationHeaderButtonLayout(options, props.route, itemConst, options.headerRightArr, true)
        }

        {/* body */}
        <View style={{
          height: itemConst.contentHeight,
          // flex: 1,
          position: 'absolute',
          left: itemConst.headerTitleAlign == 'center' ? bodySideSpace : bodySideSpaceL,
          right: itemConst.headerTitleAlign == 'center' ? bodySideSpace : bodySideSpaceR,
          alignItems: itemConst.headerTitleAlign == 'center' ? 'center' : 'flex-start',

          paddingLeft: (options.headerLeftArr != null && options.headerLeftArr.length > 0) ? 10 : 0,
          paddingRight: (options.headerRightArr != null && options.headerRightArr.length > 0) ? 10 : 0,

          justifyContent: 'center',
          // backgroundColor: '#ff000088',
        }}>
          {
            options.title != null && options.title != '' &&
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              ellipsizeMode='tail'
              style={[{
                // backgroundColor: '#00000022',
                width: '100%',
                // paddingLeft: (options.headerLeftArr != null && options.headerLeftArr.length > 0) ? 10 : 0,
                // paddingRight: (options.headerRightArr != null && options.headerRightArr.length > 0) ? 10 : 0,
                ...commonStyle.fonts.navigationTitle,
                textAlign: itemConst.headerTitleAlign,

              }, options.titleStyle]}>
              {options.title || ''}
            </Text>
          }
          {
            options.headerTitle != null &&
            options.headerTitle()
          }

          {
            options.navigationDesc != null && options.navigationDesc != '' &&
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              ellipsizeMode='tail'
              style={{
                width: '100%',
                // paddingLeft: (options.headerLeftArr != null && options.headerLeftArr.length > 0) ? 10 : 0,
                // paddingRight: (options.headerRightArr != null && options.headerRightArr.length > 0) ? 10 : 0,
                ...commonStyle.fonts.regularDesc,
                textAlign: itemConst.headerTitleAlign,
              }}>
              {options.navigationDesc}
            </Text>
          }
        </View>
      </View>
    </View>
  );
  // }

  // }
};

function navigationHeaderButtonLayout(options, route, itemConst, headerArr = [], isRight = false) {
  return (
    <View
      style={[styles.buttonViewContainer, {
        height: itemConst.contentHeight
      },
      isRight ? {
        right: 0,
      } : {
        left: 0,
      }]}>
      {
        headerArr.map((item, index) =>
          <NavigationHeaderButton
            key={item.key}
            route={route}
            options={options}
            itemConst={itemConst}
            headerArr={headerArr}
            isRight={false}
            item={item}
            index={index}
          />

        )
      }
    </View>
  )
}

function NavigationHeaderButton({ options, route, itemConst, headerArr = [], isRight = false, item, index }) {

  return (
    <TouchableOpacity
      activeOpacity={1}
      key={isRight ? `headerRightArr_${index}` : `headerLeftArr_${index}`}
      style={[styles.button, {
        height: itemConst.contentHeight,
        // backgroundColor: 'green',
        width: item.width || itemConst.defaultWidth,
        marginRight: (index != headerArr.length - 1) ? itemConst.defaultSpace : 0,
      }, item.style]}
      onPress={() => {
        if (item.key == headerButtonKey.back) {
          pop(options.backStep || 1);
        } else if (item.key == headerButtonKey.menu) {
          getNavigationDrawer().openDrawer();
        } else if (item.key == headerButtonKey.addMoney) {

        }
      }}
    >
      {
        item.type == headerButtonType.icon &&
        <AllIcons
          vectorName={item.icon.vectorName}
          name={item.icon.name}
          size={item.icon.size}
          color={(options.selectedKey != null && options.selectedKey == item.key) ? item.icon.selectedColor : item.icon.color}
          style={item.icon.style != null && item.icon.style}
        />
      }

      {
        item.type == headerButtonType.text && item.key == headerButtonKey.addMoney &&
        <Text allowFontScaling={false}
          style={{
            textAlign: 'center',
            color: colors.tertiary,
            ...commonStyle.fonts.bold14
          }}
        >
          {item.text}
        </Text>
      }

    </TouchableOpacity>
  )
}