
const resources = {
    splash: require('./icons/splash.jpg'),
    onboarding1: require('./icons/onboarding1.png'),
    onboarding2: require('./icons/onboarding2.png'),
    profilePlaceholder: require('./icons/profilePlaceholder.png'),
    searchUserPath: require('./icons/searchUserPath.png')
}

export function getAssetByFilename(filename) {
    if (resources.hasOwnProperty(filename)) {
        return resources[filename];
    }
    return null;
}

export const ImageSource = {
    splash: 'splash',
    onboarding1: 'onboarding1',
    onboarding2: 'onboarding2',
    profilePlaceholder: 'profilePlaceholder',
    searchUserPath: 'searchUserPath'
}