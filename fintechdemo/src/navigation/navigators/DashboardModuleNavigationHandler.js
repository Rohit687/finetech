// https://reactnavigation.org/docs/getting-started.html
// https://reactnavigation.org/docs/headers.html
// https://reactnavigation.org/docs/stack-navigator.html#headerbacktitle

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerComponent, headerItems } from '../headerView/header.json';
import { LanguageText } from '../../resource/languages/language';
import { Dashboard } from '@screens';
import { screensConst } from '../../constant/screensConst';
import { NewRequest } from '../../screens';

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

    </MainStack.Navigator>
  );
}


export default DashboardModuleNavigationHandler;