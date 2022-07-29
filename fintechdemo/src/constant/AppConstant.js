import { Alert, Platform } from 'react-native';
import Snackbar from 'react-native-snackbar';
import NetInfo from "@react-native-community/netinfo";
import { colors } from './colors';

class AppConstant {

  static statusData = {
    top: 1,
    bottom: 0,
    headerHeight: 0
  };
  static getStatusData() {
    return this.statusData;
  }
  static setStatusData(statusData) {
    this.statusData = statusData;
  }

  static mainAppThis = null;
  static getMainAppThis() {
    return this.mainAppThis;
  }
  static setMainAppThis(mainAppThis) {
    this.mainAppThis = mainAppThis;
  }

  static showConsoleLog(message, ...optionalParams) {
    console.log(message, ...optionalParams);
  }

  static showSuccessToast(msg) {
    setTimeout(() => {
      Snackbar.show({
        text: msg,
        backgroundColor: colors.success,
        duration: Snackbar.LENGTH_LONG,
      });
    }, 50);
  }

  static showErrorToast(msg) {
    setTimeout(() => {
      Snackbar.show({
        text: msg,
        backgroundColor: colors.error,
        duration: Snackbar.LENGTH_LONG,
      });
    }, 50);
  }

  static showRetryAlert(callback = () => { }, isShowAlert = true, isCancel = true, canceCallback = () => { }) {

    setTimeout(() => {

      NetInfo.fetch().then(state => {
        //console.log(state);
        if (state.isConnected) {
          callback();
        }
        else {
          if (isShowAlert && isCancel) {
            Alert.alert(
              'Network Issue',
              'You are offline. Please check your internet connection.',
              [
                { text: 'Cancel', onPress: () => { canceCallback(); }, style: 'cancel' },
                {
                  text: 'Retry', onPress: () => {
                    setTimeout(() => {
                      this.showRetryAlert(callback, isShowAlert, isCancel);
                    }, 100);
                  }
                },
              ],
              { cancelable: false }
            )
          } else if (isShowAlert && !isCancel) {
            Alert.alert(
              'Network Issue',
              'You are offline. Please check your internet connection.',
              [
                {
                  text: 'Retry', onPress: () => {
                    setTimeout(() => {
                      this.showRetryAlert(callback, isShowAlert, isCancel);
                    }, 100);
                  }
                },
              ],
              { cancelable: true }
            )
          }
        }
      })

    }, 100);
  }

  static showAlert({ title = '', msg = '', ok = 'Ok', canCancel = false, cancel = 'Cancel', callback = () => { }, canceCallback = () => { } }) {
    setTimeout(() => {

      if (!canCancel) {
        Alert.alert(
          title,
          msg,
          [
            {
              text: ok, onPress: () => {
                callback()
              }
            },
          ],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          title,
          msg,
          [
            { text: cancel, onPress: () => { canceCallback(); }, style: 'cancel' },
            {
              text: ok, onPress: () => {
                callback();
              }
            },
          ],
          { cancelable: false }
        )
      }

    }, 100);
  }

  //Language
  static selectedLauguage = 'en';
  static getSelectedLauguage() {
    return this.selectedLauguage;
  }
  static setSelectedLauguage(selectedLauguage) {
    if (selectedLauguage.includes("_")) {
      this.selectedLauguage = selectedLauguage.split("_")[0];
    } else {
      this.selectedLauguage = selectedLauguage;
    }
  }

  

  static recentlyPlaySongs = [];
  static getRecentlyPlaySongs() {
    return this.recentlyPlaySongs;
  }
  static setRecentlyPlaySongs(recentlyPlaySongs) {
    this.recentlyPlaySongs = recentlyPlaySongs;
  }

  //------ Start API-----
  static logedInUserAuthToken = null;
  static getLogedInUserAuthToken() {
    return this.logedInUserAuthToken;
  }
  static setLogedInUserAuthToken(logedInUserAuthToken) {
    this.logedInUserAuthToken = logedInUserAuthToken;
  }
  static getServiceHeader(type = 1) {
    switch (type) {
      case 1:
        return {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: this.getLogedInUserAuthToken() ? `Bearer ${this.getLogedInUserAuthToken()}` : ''
        };
      case 2:
        return {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: this.getLogedInUserAuthToken() ? `Bearer ${this.getLogedInUserAuthToken()}` : ''
        };
      default:
        return {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.getLogedInUserAuthToken() ? `Bearer ${this.getLogedInUserAuthToken()}` : ''
        };
    }
  }

  static getServiceHeaderData(type = 0) {
    return {
      headers: this.getServiceHeader(type),
      credentials: 'include',
    }
  }

  static urlEncodeDataBody(data) {
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    urlEncodedDataPairs = [...data._parts] // expand the elements from the .entries() iterator into an actual array
      .map(e => encodeURIComponent(e[0]) + "=" + encodeURIComponent(e[1]))  // transform the elements into encoded key-value-pairs
    urlEncodedData = urlEncodedDataPairs.join('&');
    // this.showConsoleLog(`urlEncodedData:`, urlEncodedData);
    return urlEncodedData;
  }

  static rawDataBody(data) {
    let json = {};
    [...data._parts].map(e => {
      json[e[0]] = e[1];
    })
    // this.showConsoleLog(`json:`, json);
    return JSON.stringify(json);
  }
  //------ End API----- 
}


export { AppConstant };
