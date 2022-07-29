import React, { useEffect } from "react";
import {
  View} from "react-native";
import { dimension } from "../../config/commonStyle";

const sidebarKeys = {
  profile: 'profile',
  changePassword: 'changePassword',
  schedule: 'schedule',
  help: 'help',
  shareFeedback: 'shareFeedback'
};

export function Sidebar(props) {
 
  useEffect(() => {
    
  }, [])

  return (
    <View
      style={{
        backgroundColor: "white",
        width: '100%',
        height: dimension.height,
        // paddingHorizontal: commonStyle.viewInnerPaddingHorizontal
      }}
    >
    
    </View >
  );
}