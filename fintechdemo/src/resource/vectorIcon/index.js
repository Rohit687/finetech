import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

export const iconConstant = {
    featherMenu: 'menu',
    ioniconsBack: 'chevron-back',
    ioniconsDown: 'chevron-down',
    ioniconsUp: 'chevron-up',
    ioniconsRight: 'chevron-forward',

    materialCommunityIconsfailed: 'account-cancel',
    featherReceived: 'user-plus',
};

export const AllIconsType = {
    fontAwesome: 'FontAwesomeIcon',
    materialIcons: 'MaterialIconsIcons',
    materialCommunityIcons: 'MaterialCommunityIconsIcons',
    fontAwesome5: 'FontAwesome5',
    ioniconsIcons: 'IoniconsIcons',
    featherIcons: 'FeatherIcons',
    entypoIcons: 'EntypoIcons',
    octiconsIcons: 'OcticonsIcons',
    foundationIcons: 'FoundationIcons',
    antDesignIcons: 'AntDesignIcons'
};

export const FoundationIcons = props => <Foundation {...props} />;
export const IoniconsIcons = props => <Ionicons {...props} />;
export const FeatherIcons = props => <Feather {...props} />;
export const FontAwesomeIcon = props => <FontAwesome {...props} />;
export const FontAwesome5Icon = props => <FontAwesome5 {...props} />;
export const MaterialIconsIcons = props => <MaterialIcons {...props} />;
export const MaterialCommunityIconsIcons = props => <MaterialCommunityIcons {...props} />;
export const AntDesignIcons = props => <AntDesign {...props} />;
export const OcticonsIcons = props => <Octicons {...props} />;
export const EntypoIcons = props => <Entypo {...props} />;

export const AllIcons = props => {
    switch (props.vectorName) {
        case AllIconsType.fontAwesome:
            return <FontAwesomeIcon {...props} />;
        case AllIconsType.fontAwesome5:
            return <FontAwesome5Icon {...props} />;
        case AllIconsType.ioniconsIcons:
            return <IoniconsIcons {...props} />;
        case AllIconsType.materialIcons:
            return <MaterialIconsIcons {...props} />;
        case AllIconsType.materialCommunityIcons:
            return <MaterialCommunityIconsIcons {...props} />;
        case AllIconsType.featherIcons:
            return <FeatherIcons {...props} />;
        case AllIconsType.entypoIcons:
            return <EntypoIcons {...props} />;
        case AllIconsType.octiconsIcons:
            return <OcticonsIcons {...props} />;
        case AllIconsType.foundationIcons:
            return <FoundationIcons {...props} />;
        case AllIconsType.antDesignIcons:
            return <AntDesignIcons {...props} />;
    }
};