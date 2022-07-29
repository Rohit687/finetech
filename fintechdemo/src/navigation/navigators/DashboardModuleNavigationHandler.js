// https://reactnavigation.org/docs/getting-started.html
// https://reactnavigation.org/docs/headers.html
// https://reactnavigation.org/docs/stack-navigator.html#headerbacktitle

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerComponent, headerItems } from '../headerView/header.json';
import { LanguageText } from '../../resource/languages/language';
import { Dashboard } from '../../screens';
import { screensConst } from '../../constant/screensConst';

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
          headerTitleAlign: 'left'
        })}
      />

    </MainStack.Navigator>
  );
}


export default DashboardModuleNavigationHandler;