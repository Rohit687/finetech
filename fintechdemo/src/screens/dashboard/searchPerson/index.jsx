import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ContainerScrollView, ContinueButton, FastImageWithPlaceholder, ViewBezier } from '../../../component';
import { commonStyle, dimension } from '../../../config';
import { AppConstant, colors } from '../../../constant';
import { getAssetByFilename, ImageSource, LanguageText } from '../../../resource';
import styles from './searchPerson.style';

const imageSize = dimension.aspectRatio * 320;
const userImageSize = dimension.aspectRatio * 30;
const searchUserWidth = dimension.aspectRatio * 68;
const searchUserHeight = dimension.aspectRatio * 54;

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

    function userLayout(style) {
        return (
            <View style={[{
                position: 'absolute',

                width: searchUserWidth,
                height: searchUserHeight,
                alignItems: 'center',
                // backgroundColor: 'red',
                // opacity:0.5
            }, style]}>
                <FastImageWithPlaceholder
                    style={{
                        height: userImageSize,
                        width: userImageSize,
                        borderRadius: userImageSize / 2,
                        borderWidth: 2,
                        borderColor: colors.kWhite
                    }}
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
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    allowFontScaling={false}
                    style={{
                        ...commonStyle.fonts.regular10,
                        color: colors.kWhite,
                        textAlign: 'center'
                    }}
                >
                    Loream Ipsum
                </Text>
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

                <View style={styles.searchContainer(imageSize)}>
                    <Image
                        style={styles.searchCircle(imageSize)}
                        source={getAssetByFilename(ImageSource.searchUserPath)}
                    />

                    {/* ----- Outer start ----- */}
                    {userLayout({   //top-left
                        top: dimension.aspectRatio * 40,
                        left: dimension.aspectRatio * 15,
                    })}
                    {userLayout({   //top-right
                        top: dimension.aspectRatio * 40,
                        right: dimension.aspectRatio * 15,
                    })}
                    {userLayout({   //bottom-left
                        bottom: dimension.aspectRatio * 30,
                        left: dimension.aspectRatio * 15,
                    })}
                    {userLayout({   //bottom-right
                        bottom: dimension.aspectRatio * 30,
                        right: dimension.aspectRatio * 15,
                    })}
                    {/* ----- Outer end ----- */}

                    {/* ----- Inner start ----- */}
                    {userLayout({   //top-left
                        top: dimension.aspectRatio * 120,
                        left: dimension.aspectRatio * 65,
                    })}
                    {userLayout({   //top-right
                        top: dimension.aspectRatio * 120,
                        right: dimension.aspectRatio * 65,
                    })}
                    {userLayout({   //bottom-left
                        bottom: dimension.aspectRatio * 110,
                        left: dimension.aspectRatio * 65,
                    })}
                    {userLayout({   //bottom-right
                        bottom: dimension.aspectRatio * 110,
                        right: dimension.aspectRatio * 65,
                    })}
                    {/* ----- Inner end ----- */}

                    {/* ----- Medium start ----- */}
                    {userLayout({   //top-center
                        top: dimension.aspectRatio * 40,
                        left: dimension.width / 2 - (searchUserWidth / 2),
                    })}
                    {userLayout({   //center-left
                        top: ((imageSize / 2) + 20) - (searchUserHeight / 2),
                        left: 10,
                    })}
                    {userLayout({   //center-right
                        top: ((imageSize / 2) + 20) - (searchUserHeight / 2),
                        right: 10,
                    })}
                    {userLayout({   //top-left
                        top: dimension.aspectRatio * 80,
                        left: dimension.aspectRatio * 35,
                    })}
                    {userLayout({   //top-right
                        top: dimension.aspectRatio * 80,
                        right: dimension.aspectRatio * 35,
                    })}
                    {userLayout({   //bottom-left
                        bottom: dimension.aspectRatio * 70,
                        left: dimension.aspectRatio * 40,
                    })}
                    {userLayout({   //bottom-right
                        bottom: dimension.aspectRatio * 70,
                        right: dimension.aspectRatio * 40,
                    })}
                    {userLayout({   //bottom-center
                        bottom: dimension.aspectRatio * 25,
                        left: dimension.width / 2 - (searchUserWidth / 2),
                    })}
                    {/* ----- Medium end ----- */}

                </View>
            </ContainerScrollView>

            {/* {selectedUserLayout()} */}
        </View>
    );
}

export default SearchPersonView;