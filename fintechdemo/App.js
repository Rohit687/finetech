import React, { Component } from 'react';
import { NativeModules, View, Platform, ActivityIndicator, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppConstant } from './src/constant/AppConstant';
import RootNavigator from './src/navigation/navigators/MainNavigationHandler';

const CommonTask = NativeModules.CommonTask;

export default class App extends Component {

  constructor(props) {
    super(props);
    LogBox.ignoreAllLogs()
    //Set variables in state to render values
  }

  componentDidMount() {

    AppConstant.setMainAppThis(this);

    let defaultStatus = {
      top: Platform.OS == 'android' ? 0 : 20,
      bottom: 0,
      headerHeight: 64
    }

    if (Platform.OS == 'ios') {
      CommonTask.getStatusHeight((error, events) => {
        AppConstant.setStatusData({
          top: events.top == 0 ? defaultStatus.top : events.top,
          bottom: events.bottom,
          headerHeight: defaultStatus.headerHeight
        });
      });
    } else {
      AppConstant.setStatusData({
        ...defaultStatus,
        // top: 0,
      });
    }

  }

  componentWillUnmount() {
  }

  render() {
    return <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  }
}