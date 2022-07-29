import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { colors } from '../constant/colors';
import { commonStyle } from './commonStyle';

const SafeAreaCustomView = (props) => {
  return (
    //SafeAreaView background color set in whole screen background color
    <SafeAreaView style={[commonStyle.commonContainer, props.SafeAreaViewStyle, { backgroundColor: props.backgroundColor ? props.backgroundColor : "white" }]}>
     
        {props.children}
    </SafeAreaView>
  );
};


const StatusBarView = (props) => {
  return (
    <StatusBar
      barStyle={props.barStyle}
      backgroundColor={props.androidStatusBackColor ? props.androidStatusBackColor : colors.kBlack} //For android
    />
  );
};

// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );

export { SafeAreaCustomView, StatusBarView};
