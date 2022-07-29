import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ContainerScrollView, ContinueButton, FastImageWithPlaceholder, ViewBezier } from '../../../component';
import { commonStyle, dimension } from '../../../config';
import { AppConstant } from '../../../constant';
import { getAssetByFilename, ImageSource, LanguageText } from '../../../resource';
import styles from './searchPerson.style';

const imageSize = dimension.width - 5;
function SearchPersonView() {

    function selectedUserLayout() {
        return (
            <View style={styles.userContainer}>
                <ViewBezier />
                <View style={styles.userInnerContainer}>
                    <FastImageWithPlaceholder
                        style={styles.userImage}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
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
                        Adeleke Ramon
                    </Text>

                    <Text allowFontScaling={false}
                        style={styles.userPhone}
                    >
                        (+234) 234 234343
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
                        }} />
                </View>
            </View>
        )
    }

    return (
        <View style={{
            width: '100%',
            flexGrow: 1
        }}>
            <ContainerScrollView containerStyle={{
                justifyContent: 'flex-start',
                paddingHorizontal: 0,
                paddingBottom: (dimension.height - (dimension.width + 30) - AppConstant.getStatusData().headerHeight) > 360 ? 0 : 400,
            }}>

                <View style={styles.searchContainer}>
                    <Image
                        style={styles.searchCircle(imageSize)}
                        source={getAssetByFilename(ImageSource.searchUserPath)}
                    />

                
                </View>
            </ContainerScrollView>

            {/* {selectedUserLayout()} */}
        </View>
    );
}

export default SearchPersonView;