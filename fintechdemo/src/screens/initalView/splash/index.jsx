import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { _bootstrapAsync } from '../../../config/asyncStorage';
import { commonStyle } from '../../../config/commonStyle';
import { changeAndroidBottomNavigationColor } from '../../../config/NativeBridge';
import { colors } from '../../../constant/colors';
import { resetInitial } from '../../../navigation/navigators/TopNavigatorRef';
import styles from './splash.style';

function SplashView() {
    useEffect(() => {

        setTimeout(() => {
            _bootstrapAsync().then((value) => {
                resetInitial(value);
            });
        }, 2000);
    }, [])

    useIsFocused(()=>{
        changeAndroidBottomNavigationColor(colors.kWhite)
    },[])
    return (

        <View style={commonStyle.commonContainer}>
            {/* <StatusBarView androidStatusBackColor={colors.primary} barStyle={statusBarValue.white} />
            <Image
                style={styles.splashImage}
                source={getAssetByFilename(ImageSource.splash)}
            /> */}

        </View>
    );
}


export default SplashView;