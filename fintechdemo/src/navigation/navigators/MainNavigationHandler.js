// https://reactnavigation.org/docs/getting-started.html
// https://reactnavigation.org/docs/headers.html
// https://reactnavigation.org/docs/stack-navigator.html#headerbacktitle

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './TopNavigatorRef';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppConstant } from '../../constant/AppConstant';
import { screensConst, screensNavigatorsConst } from '../../constant/screensConst';
import { OnBoardView, Splash } from '@screens';
import MenuDrawerNavigator from './MenuDrawerNavigator';

const MainStack = createNativeStackNavigator();
const RootNavigator = (props) => {
  AppConstant.showConsoleLog('createStackNavigator:', props);

  return (
    <NavigationContainer ref={navigationRef}>

      <MainStack.Navigator
        initialRouteName={screensConst.splash}
        screenOptions={{
          headerShown: false
        }}
      >
        <MainStack.Screen name={screensConst.splash} component={Splash} />
        <MainStack.Screen name={screensConst.onboardView} component={OnBoardView} />

        <MainStack.Screen
          name={screensNavigatorsConst.menuDrawerNavigator} component={MenuDrawerNavigator}
        />
    
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;