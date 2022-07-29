import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../constant/colors";
import { interFontFamily } from "../constant/fonts";

export const dimension = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    aspectRatio: Dimensions.get("window").width / 320,
}

export const commonStyle = {
    commonContainer: {
        flexGrow: 1,
        width: dimension.width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryBg,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    fonts: {
        bold18: {
            fontFamily: interFontFamily.bold,
            fontSize: 18
        },
        bold16: {
            fontFamily: interFontFamily.bold,
            fontSize: 16
        },

        regular16: {
            fontFamily: interFontFamily.regular,
            fontSize: 16
        },
        regular15: {
            fontFamily: interFontFamily.regular,
            fontSize: 15
        },

        navigationTitle: {
            fontFamily: interFontFamily.bold,
            fontSize: 16
        },
        inputFont: {
            fontSize: 16,
            fontFamily: interFontFamily.regular,
        },
    },

    //https://ethercreative.github.io/react-native-shadow-generator/
    shadowCell: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    noShadow: {
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 0
    },
    headerShadow: {
        elevation: 1,       //add shadow for Android
        shadowColor: '#bbbbbb', //add shadow for iOS
        shadowOpacity: 0.2, //add shadow for iOS
        shadowOffset: { //add shadow for iOS
            height: 5, //add shadow for iOS
        }, //add shadow for iOS
        shadowRadius: 3, //add shadow for iOS
    },

    paddingOuter: 25,
    paddingInner: 20,
    buttonBorder: 10,

    space20: 20,
    space15: 15,
    space12: 12,
    space10: 10,
    space8: 8,

};

export const siblingStyle = StyleSheet.create({
    initialStyle: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    loaderStyle: {
        backgroundColor: colors.loaderBG,
        position: "absolute",
        top: 0,
        left: 0,
        width: dimension.width,
        height: dimension.height,
        alignItems: "center",
        justifyContent: "center"
    }
});