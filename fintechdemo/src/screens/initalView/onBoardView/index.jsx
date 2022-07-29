import React, { useRef, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import styles from './onBoardView.style';
import { onBoardList } from './onBoarding.json';
import { getAssetByFilename, LanguageText } from '../../../resource';
import { commonStyle, dimension } from '../../../config/commonStyle';
import { EmptyView } from '../../../component/view/view.component';
import { colors } from '../../../constant/colors';
import { ContinueButton } from '../../../component/button/button.component';
import { PageControl } from '../../../component/pageControl/pageControl.component';

function OnBoardView() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef();
    const imageSize = dimension.aspectRatio * 170;

    // useEffect(() => {

    // }, [])

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

            <View style={styles.bottomContainer}>

                <PageControl style={{
                    justifyContent: 'flex-start'
                }} selectedIndex={currentIndex} selectedColor={colors.sliderSelected} unselectedColor={colors.sliderUnselected} count={onBoardList.length} />
                <Text allowFontScaling={false}
                    style={styles.title}
                >
                    {onBoardList[currentIndex].title}
                </Text>

                <Text allowFontScaling={false}
                    style={styles.desc}
                >
                    {onBoardList[currentIndex].desc}
                </Text>

                <ContinueButton
                    style={{
                        backgroundColor: colors.kWhite
                    }}
                    textStyle={{
                        color: colors.onboardingText
                    }}
                    title={LanguageText('onBoard').start}
                    onPress={() => {

                    }} />
            </View>
        </View>
    );
}


export default OnBoardView;