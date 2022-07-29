import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { _bootstrapAsync } from '@config/asyncStorage';
import { commonStyle } from '@config/commonStyle';
import { StatusBarView } from '@config/SafeAreaCustomView';
import { colors } from '@constant/colors';
import { statusBarValue } from '@constant/statusBar';
import { resetInitial } from '@navigation/navigators/TopNavigatorRef';
import { getAssetByFilename, ImageSource } from '@resource/images';
import styles from './splash.style';

function SplashView() {
    useEffect(() => {

        setTimeout(() => {
            _bootstrapAsync().then((value) => {
                resetInitial(value);
            });
        }, 2000);
    }, [])

    return (

        <View style={commonStyle.commonContainer}>
            <StatusBarView androidStatusBackColor={colors.kWhite} barStyle={statusBarValue.white} />
            <Image
                style={styles.splashImage}
                source={getAssetByFilename(ImageSource.splash)}
            />

        </View>
    );
}


export default SplashView;