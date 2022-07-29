import { NativeModules, Platform } from "react-native"
import { colors } from "../constant/colors";

export const changeAndroidBottomNavigationColor = (color = colors.primaryBg) => {
    if (Platform.OS == 'android') {
        NativeModules.OpenSettings.bottomNavigationColor(color);
    }
}

export const changeAndroidStatusColor = ({ color = colors.primaryBg, isDark = false }={}) => {
    if (Platform.OS == 'android') {
        NativeModules.OpenSettings.statusColor(color, isDark);
    }
}