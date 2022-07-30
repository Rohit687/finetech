// https://reactnavigation.org/docs/getting-started.html
// https://reactnavigation.org/docs/headers.html
// https://reactnavigation.org/docs/stack-navigator.html#headerbacktitle

import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerButtonKey, headerComponent, headerItems } from '../headerView/header.json';
import { LanguageText } from '../../resource/languages/language';
import { Dashboard } from '@screens';
import { screensConst } from '../../constant/screensConst';
import { NewRequest, searchPerson } from '../../screens';
import { TextInput } from 'react-native';
import { AppConstant, colors } from '../../constant';
import { commonStyle } from '../../config';

const MainStack = createNativeStackNavigator();

const DashboardModuleNavigationHandler = (props) => {
  return (
    <MainStack.Navigator
      headerMode='screen'
      screenOptions={({ route, navigation }) => {
        return headerComponent();
        // return {
        //   gestureEnabled:true
        // }
      }}
    >

      <MainStack.Screen
        name={screensConst.dashboard} component={Dashboard}
        options={({ route }) => ({
          title: `${LanguageText('hello')} Sandra,`,
          headerTitleAlign: 'left',
          headerLeftArr: headerItems.defaultLeftMenu,
          headerRightArr: headerItems.addMoney
        })}
      />
      <MainStack.Screen
        name={screensConst.newRequest} component={NewRequest}
        options={({ route }) => ({
          title: LanguageText('newRequest').title,
          headerLeftArr: headerItems.defaultBack
        })}
      />
      <MainStack.Screen
        name={screensConst.searchPerson} component={searchPerson}
        options={({ route }) => ({
          title: '',
          headerTitle: () => <SearchInput onSearch={route?.params?.onSearch} />,
          // onSearch
          titleType: headerButtonKey.searchPersionInput,
          headerLeftArr: headerItems.defaultBack
        })}
      />

    </MainStack.Navigator>
  );
}

function SearchInput({ onSearch = () => { } }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={{
        width: '95%',
        height: 50,
        backgroundColor: colors.secondaryBG,
        borderWidth: 1,
        borderColor: isFocused ? colors.searchText : colors.kWhite,
        paddingHorizontal: commonStyle.space15,
        color: colors.kWhite,
        borderRadius: commonStyle.buttonBorder
      }}
      placeholder={LanguageText('newRequest').searchFriend}
      placeholderTextColor={colors.kLightGray}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={(e) => onSearch(e.trim())}
    />
  );
}


export default DashboardModuleNavigationHandler;