import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ContainerScrollView, ContinueButton, FastImageWithPlaceholder, ViewBezier } from '../../../component';
import { commonStyle, dimension } from '../../../config';
import { AppConstant, colors, screensConst } from '../../../constant';
import { push } from '../../../navigation/navigators/TopNavigatorRef';
import { getAssetByFilename, ImageSource, LanguageText } from '../../../resource';
import { jsonCopy, myRandomNonUniqueInts, myRandomUniqueInts } from '../../../utils/string';
import { searchPerson7 } from './searchPerson.json';
import styles from './searchPerson.style';

const extraHeight = 20;
const imageSize = dimension.aspectRatio * 320;
const userImageSize = dimension.aspectRatio * 30;
const searchUserWidth = dimension.aspectRatio * 68;
const searchUserHeight = dimension.aspectRatio * 54;
const oDiameter = (dimension.aspectRatio * 315) / 2; //outer
const mDiameter = (dimension.aspectRatio * 236) / 2;
const iDiameter = (dimension.aspectRatio * 149) / 2; //inner

function SearchPersonView({ navigation: { setParams } }) {
    const [userSearchListing, setUserSearchListing] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchTimer = useRef();

    useEffect(() => {

        setParams({
            onSearch: (search) => {
                if (searchTimer.current) {
                    clearTimeout(searchTimer.current);
                    searchTimer.current = null;
                }
                if (search == '') {
                    setSelectedIndex(-1);
                    setUserSearchListing([])
                } else {
                    searchTimer.current = setTimeout(() => {
                        let searchResult = searchPerson7.filter(item => item.name.trim().toLowerCase().includes(search.trim().toLowerCase()));
                        parsing(searchResult);
                    }, 700);
                }
                AppConstant.showConsoleLog('search here:', search);
            }
        })


    }, [])

    function parsing(searchResult) {
        let searchPersonData = jsonCopy(searchResult);
        let pageNo = 0;
        let pageSize = 12;

        let totalNumberOfItems = searchPersonData.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
        let ranNum = myRandomUniqueInts(totalNumberOfItems.length, 0, pageSize - 1);

        let customizeItems = [];
        AppConstant.showConsoleLog(searchPersonData.length, totalNumberOfItems.length, ranNum);
        totalNumberOfItems.map((item, index) => {

            let angle = 0;
            if (ranNum[index] < 4) {
                AppConstant.showConsoleLog('hit1:', ranNum[index]);
                angle = ranNum[index] * 90;
            } else if (ranNum[index] < 8) {
                AppConstant.showConsoleLog('hit2:', ranNum[index]);
                angle = (ranNum[index] - 4) * 90;
            } else {
                AppConstant.showConsoleLog('hit3:', ranNum[index]);
                angle = (ranNum[index] - 8) * 90;
            }

            AppConstant.showConsoleLog(ranNum[index], angle);
            customizeItems.push({
                ...item,
                ...getPosition({
                    diameter: (
                        (ranNum[index] < 4 && iDiameter) ||
                        (ranNum[index] < 8 && oDiameter) ||
                        mDiameter
                    ),
                    angle: angle,
                    extraCustomSpace: (ranNum[index] < 8 ? 45 : 0)
                })
            })
        })

        setUserSearchListing(jsonCopy(customizeItems));
    }

    function selectedUserLayout() {
        return (
            <View style={styles.userContainer}>
                <ViewBezier />
                <View style={styles.userInnerContainer}>
                    <FastImageWithPlaceholder
                        style={styles.userImage}
                        source={{
                            uri: userSearchListing[selectedIndex].image
                        }}
                        defaultSize={{
                            width: '100%',
                            height: '100%'
                        }}
                        resizeMode={'cover'}
                        defaultImageMode={'cover'}
                        defaultImage={getAssetByFilename(ImageSource.profilePlaceholder)}
                    />

                    <Text allowFontScaling={false}
                        style={styles.username}
                    >
                        {userSearchListing[selectedIndex].name}
                    </Text>

                    <Text allowFontScaling={false}
                        style={styles.userPhone}
                    >
                        {userSearchListing[selectedIndex].phone}
                    </Text>

                    <ContinueButton
                        style={[{
                            marginTop: commonStyle.space40,
                        }, styles.button]}
                        textStyle={{
                            ...commonStyle.fonts.semiBold17
                        }}
                        title={LanguageText('continue')}
                        onPress={() => {
                            push(screensConst.newRequest, {
                                item: userSearchListing[selectedIndex]
                            })
                        }} />
                </View>
            </View>
        )
    }

    function degToRad(deg) {
        return deg * Math.PI / 180;
    }
    function getPosition({ diameter, angle, extraCustomSpace = 0 }) {
        const angleRad = degToRad(angle + extraCustomSpace);
        const extraSpace = (dimension.aspectRatio * 0);
        return {
            top: (imageSize / 2) - extraSpace + extraHeight - (diameter * Math.cos(-angleRad)) - (searchUserHeight / 2) + (dimension.aspectRatio * 8),
            left: (imageSize / 2) - extraSpace - (diameter * Math.sin(-angleRad)) - (searchUserWidth / 2)
        }
    }

    function userLayout(item, index) {

        return (
            <View
                key={`userLayout_${item.id}`}
                style={[{
                    position: 'absolute',
                    width: searchUserWidth * (selectedIndex == index ? 1.5 : 1),
                    height: searchUserHeight * (selectedIndex == index ? 1.5 : 1),
                    alignItems: 'center',
                    left: item.left - (selectedIndex == index ? ((searchUserWidth / 2) * 0.5) : 0),
                    top: item.top - (selectedIndex == index ? (((searchUserHeight / 2)) * 0.5) : 0),
                }]}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        if (selectedIndex == index) {
                            setSelectedIndex(-1);
                        } else {
                            setSelectedIndex(index);
                        }
                    }}
                    style={{
                        height: userImageSize * (selectedIndex == index ? 1.5 : 1),
                        width: userImageSize * (selectedIndex == index ? 1.5 : 1)
                    }}>
                    <FastImageWithPlaceholder
                        style={{
                            height: userImageSize * (selectedIndex == index ? 1.5 : 1),
                            width: userImageSize * (selectedIndex == index ? 1.5 : 1),
                            borderRadius: (userImageSize * (selectedIndex == index ? 1.5 : 1)) / 2,
                            borderWidth: selectedIndex == index ? 3 : 2,
                            borderColor: selectedIndex == index ? colors.searchText : colors.kWhite
                        }}
                        source={{
                            uri: item.image
                        }}
                        defaultSize={{
                            width: '100%',
                            height: '100%'
                        }}
                        resizeMode={'cover'}
                        defaultImageMode={'cover'}
                        defaultImage={getAssetByFilename(ImageSource.profilePlaceholder)}
                    />
                </TouchableOpacity>

                <Text
                    onPress={() => {
                        if (selectedIndex == index) {
                            setSelectedIndex(-1);
                        } else {
                            setSelectedIndex(index);
                        }
                    }}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    allowFontScaling={false}
                    style={{
                        ...commonStyle.fonts.regular10,
                        color: selectedIndex == index ? colors.searchText : colors.kWhite,
                        textAlign: 'center'
                    }}
                >
                    {item.name}
                </Text>
            </View>
        )
    }

    AppConstant.showConsoleLog('userSearchListing:', userSearchListing)
    return (
        <View style={{
            width: '100%',
            flexGrow: 1
        }}>
            <ContainerScrollView containerStyle={{
                justifyContent: 'flex-start',
                paddingHorizontal: 0,
                paddingBottom: selectedIndex != -1 ? ((dimension.height - (dimension.width + 30) - AppConstant.getStatusData().headerHeight) > 360 ? 0 : 400) : 0,
            }}>

                <View style={styles.searchContainer(imageSize, extraHeight)}>
                    <Image
                        style={styles.searchCircle(imageSize)}
                        source={getAssetByFilename(ImageSource.searchUserPath)}
                    />

                    {
                        userSearchListing.map((item, index) => userLayout(item, index))
                    }

                </View>
            </ContainerScrollView>

            {selectedIndex != -1 && selectedUserLayout()}
        </View>
    );
}

export default SearchPersonView;