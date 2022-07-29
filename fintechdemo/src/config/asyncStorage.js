import AsyncStorage from '@react-native-community/async-storage';
import { AppConstant } from '../constant/AppConstant';
import { screensConst, screensNavigatorsConst } from '../constant/screensConst';

export const asyncStorageKeys = {
    onBoarded: 'onBoarded'
};

export const _bootstrapAsync = () => {
    return (
        new Promise((resolve, _) => {
            try {
                AsyncStorage.multiGet([asyncStorageKeys.onBoarded]).then(
                    (value) => {
                        AppConstant.showConsoleLog('Then: ', value);
                        if (value[0][1] == null) {
                            resolve(screensConst.onboardView);
                        } else {
                            resolve(screensNavigatorsConst.menuDrawerNavigator);
                        }
                    });
            } catch (error) {
                resolve(screensConst.onboardView);
            }
        })
    );
}

export const onboardingDone = () => {
    return (
        new Promise((resolve, _) => {
            AsyncStorage.setItem(asyncStorageKeys.onBoarded, JSON.stringify(true))
                .then(() => {
                    resolve();
                });
        })
    );
}