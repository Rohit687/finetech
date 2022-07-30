import React, { useRef, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import styles from './onBoardView.style';
import { onBoardList } from './onBoarding.json';
import { getAssetByFilename, LanguageText } from '../../../resource';
import { commonStyle, dimension } from '../../../config/commonStyle';
import { colors } from '../../../constant/colors';
import { ContinueButton } from '../../../component/button/button.component';
import { PageControl } from '../../../component/pageControl/pageControl.component';
import { onboardingDone } from '../../../config';
import { resetInitial } from '../../../navigation/navigators/TopNavigatorRef';
import { screensNavigatorsConst } from '../../../constant';

function OnBoardView() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();

    return (
        <View style={commonStyle.commonContainer}>

            <FlatList
                ref={flatListRef}
                style={styles.container}
                data={onBoardList}
                pagingEnabled={true}
                onScroll={(e) => setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / dimension.width))}
                renderItem={({ item }) => <Image
                    style={styles.listImage}
                    source={getAssetByFilename(item.imageName)}
                />
                }
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(_, index) => `OnBoard_${index.toString()}`}
            />

            <View style={[styles.bottomContainer,
            onBoardList[currentIndex].isLight &&
            {
                backgroundColor: colors.kWhite
            }]}>

                <PageControl style={{
                    justifyContent: 'flex-start'
                }} selectedIndex={currentIndex} selectedColor={colors.sliderSelected} unselectedColor={colors.sliderUnselected} count={onBoardList.length} />
                <Text allowFontScaling={false}
                    style={[styles.title,
                    onBoardList[currentIndex].isLight &&
                    {
                        color: colors.onboardingText
                    }]}
                >
                    {onBoardList[currentIndex].title}
                </Text>

                <Text allowFontScaling={false}
                    style={[styles.desc,
                    onBoardList[currentIndex].isLight &&
                    {
                        color: colors.onboardingText
                    }]}
                >
                    {onBoardList[currentIndex].desc}
                </Text>

                <ContinueButton
                    style={{
                        backgroundColor: onBoardList[currentIndex].isLight ? colors.primaryBg : colors.kWhite
                    }}
                    textStyle={{
                        color: onBoardList[currentIndex].isLight ? colors.kWhite : colors.onboardingText
                    }}
                    title={LanguageText('onBoard').start}
                    onPress={() => {
                        onboardingDone().then((value) => {
                            resetInitial(screensNavigatorsConst.menuDrawerNavigator);
                        });
                    }} />
            </View>
        </View>
    );
}

export default OnBoardView;