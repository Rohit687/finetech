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
                        // if (value[0][1] == null) {
                        //     resolve(screensConst.onboardView);
                        // } else {
                            resolve(screensNavigatorsConst.menuDrawerNavigator);
                        // }
                        // else {
                        // let userData = JSON.parse(value[0][1]);
                        // AppConstant.showConsoleLog('Then userData: ', userData);
                        // AppConstant.setLogedInUserAuthToken(`${userData.tokens.access.token}`);
                        // AppConstant.setUserData(jsonCopy(userData))
                        // AppConstant.setLogedInUserId(userData.user.id);

                        // if (value[1][1] != null) {
                        //     let recentlyPlay = JSON.parse(value[1][1]);
                        //     AppConstant.setRecentlyPlaySongs(jsonCopy(recentlyPlay))
                        // }
                        // store.dispatch({
                        //     type: USER_INFO_TYPE,
                        //     payload: jsonCopy(userData)
                        // })
                        // resolve(screensNavigatorsConst.bottomTabNavigator);

                        // }
                    });
            } catch (error) {
                resolve(screensConst.onboardView);
            }
        })
    );
}

