import React, { } from 'react';
import { View } from 'react-native';
import { commonStyle } from '../../../config/commonStyle';
import styles from './onBoardView.style';

function OnBoardView() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const flatListRef = useRef();
    // const imageSize = dimension.aspectRatio * 170;
    // useEffect(() => {

    // }, [])

    return (
        <View style={commonStyle.commonContainer}>
            {/* <TouchableOpacity activeOpacity={0.8}
                style={styles.skipButton}
                onPress={() => {
                    onboardingDone().then(() => {
                        resetInitial(screensNavigatorsConst.userModule);
                    })
                }}

            >
                <Text allowFontScaling={false}
                    style={styles.skip}
                >
                    {LanguageText('skipTitle')}
                </Text>

            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                style={{
                    width: '100%',
                    flexGrow: 1,
                    marginBottom:commonStyle.viewOuterPaddingHorizontal
                }}
                data={onBoardList}
                pagingEnabled={true}
                onScroll={(e) => setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / dimension.width))}
                renderItem={({ item }) =>
                    <View style={styles.listContainer}>
                        <Text allowFontScaling={false}
                            style={styles.listTitle}
                        >
                            {item.title}
                        </Text>

                        <Text allowFontScaling={false}
                            style={styles.listDesc}
                        >
                            {item.desc}
                        </Text>

                        <Image
                            style={[{
                                width: imageSize,
                                height: imageSize,
                                borderRadius: imageSize / 2,
                            }, styles.listImages]}
                            source={getAssetByFilename(ImageSource[item.key])}
                        />

                    </View>
                }
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item, index) => `OnBoard_${index.toString()}`}
            />

            <PageControl selectedIndex={currentIndex} selectedColor={colors.pagerSelected} unselectedColor={colors.pagerUnselected} count={onBoardList.length} />

            <ContinueFlexButton
                style={styles.submit}
                // textStyle={{
                //     width: 110
                // }}
                title={currentIndex != (onBoardList.length - 1) ? LanguageText('nextTitle') : LanguageText('onBoard').letStart}
                onPress={() => {
                    if (currentIndex == onBoardList.length - 1) {
                        onboardingDone().then(() => {
                            resetInitial(screensNavigatorsConst.userModule);
                        })
                    } else {
                        flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
                    }
                }}
            /> */}
        </View>


    );
}


export default OnBoardView;