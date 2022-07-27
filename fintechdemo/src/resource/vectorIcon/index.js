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
    ioniconsIconsHome: 'ios-home',
    fontAwesome5Profile: 'user-alt',
    materialCommunityIconsChef: 'chef-hat',
    materialIconsCuisines: 'room-service',
    materialIconsDish: 'restaurant',

    ioniconsBack: 'chevron-back',
    ioniconsDown: 'chevron-down',
    ioniconsUp: 'chevron-up',
    ioniconsRight: 'chevron-forward',
    ioniconsKey: 'key-outline',

    antDesignMobile: 'mobile1',
    materialIconsPass: 'lock',

    entypoIconsOpenEye: 'eye',
    entypoIconsCloseEye: 'eye-with-line',

    materialCommunityIconsPrivacyCheck: 'checkbox-marked-outline',
    materialCommunityIconsPrivacyUncheck: 'checkbox-blank-outline',

    octiconsIconsSearch: 'search',

    fontAwesome5Name: 'user-alt',

    fontAwesomeAddress: 'map-signs',

    foundationIconsMail: 'mail',

    ioniconsLocationPin: 'md-location-sharp',
    materialIconsLocation: 'my-location',
    materialCommunityIconsNotification: 'bell-ring',
    fontAwesomeWhatsApp: 'whatsapp',
    ioniconsFilter: 'options',
    fontAwesomeRating: 'star',
    entypoIconsHeartUnSelected: 'heart-outlined',
    antDesignHeartSelected: 'heart',
    entypoIconsAddCart: 'squared-plus',
    entypoIconsRemoveCart: 'squared-minus',
    featherCheck: 'check-square',
    featherUnCheck: 'square',
    entypoDotMenu: 'dots-three-vertical',
    ioniconsRadio: 'radio-button-on',
    ioniconsRadioUnselected: 'radio-button-off',
    fontAwesome5Work: 'building',
    fontAwesome5CashOnDelivery: 'hand-holding-usd',
    ioniconsOnlinePay: 'phone-portrait-outline',
    fontAwesome5Edit: 'edit',
    materialIconsOrders: 'shopping-bag',
    materialIconsPastOrders: 'history',
    entypoIconsWallet: 'wallet',
    entypoIconsAbout: 'info-with-circle',
    materialCommunityIconsTermCondition: 'text-box-check',
    ioniconsPrivacy: 'shield-checkmark',
    materialCommunityIconsRefund: 'cash-refund',
    entypoIconsShare: 'share',
    antDesignIconsAdd: 'pluscircle',
    entypoIconsArrow: 'chevron-thin-right',


    materialCommunityIconsSort: 'sort',

    materialCommunityIconsCart: 'cart-outline',

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