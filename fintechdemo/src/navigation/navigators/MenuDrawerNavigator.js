// https://reactnavigation.org/docs/getting-started.html
// https://reactnavigation.org/docs/headers.html
// https://reactnavigation.org/docs/stack-navigator.html#headerbacktitle

import React, { useEffect } from 'react';
import { View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardModuleNavigationHandler from './DashboardModuleNavigationHandler';
import { setNavigationDrawer } from './TopNavigatorRef';
import { Sidebar } from '../sidebar/sidebar';
import { screensNavigatorsConst } from '@screens';

const MenuDrawer = createDrawerNavigator();
const MenuDrawerNavigator = (props) => {
  return (
    <MenuDrawer.Navigator
      drawerStyle={{
        width: '100%',
        backgroundColor: 'transparent',
      }}
      hideStatusBar={Platform.OS == 'ios'}
      overlayColor="#00000088"
      backBehavior='history'
      screenOptions={({ navigation, route }) => {
        setNavigationDrawer(navigation);
        return ({
          headerShown: false,
          drawerStyle: {
            width: '80%'
          }
        })
      }}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <MenuDrawer.Screen name={screensNavigatorsConst.dashboardNavigator} component={DashboardModuleNavigationHandler} />
    </MenuDrawer.Navigator>
  );
}

export default MenuDrawerNavigator;