import React, { useEffect, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import { ContinueButton, FastImageWithPlaceholder, ViewBezier } from '../../../component';
import { commonStyle } from '../../../config';
import { colors, AppConstant, screensConst } from '../../../constant';
import { push } from '../../../navigation/navigators/TopNavigatorRef';
import { AllIcons, AllIconsType, getAssetByFilename, iconConstant, ImageSource, LanguageText } from '../../../resource';
import { jsonCopy } from '../../../utils/string';
import { allTransactions, dashboardKey, transationStatusById } from './dashboard.json';
import styles from './dashboard.style';

function DashboardView() {
    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        let list = [
            {
                sectionIndex: 0,
                data: [],
                key: dashboardKey.header
            },
            {
                sectionIndex: 1,
                data: jsonCopy(allTransactions),
                key: dashboardKey.transaction
            }
        ];
        setTransactionList(list);
    }, [])

    function headerLayout() {
        return (
            <View style={styles.headerContainer}>
                <Text allowFontScaling={false}
                    style={styles.headerPriceTitle}
                >
                    {LanguageText('homeScreen').currentBal}
                </Text>

                <Text allowFontScaling={false}
                    style={styles.headerPrice}
                >
                    {`${AppConstant.currencySymbol} ${200000..toLocaleString()}`}
                </Text>

                <View style={styles.headerButtonContainer}>
                    <ContinueButton
                        secondary
                        style={{
                            flex: 1
                        }}
                        textStyle={{
                            ...commonStyle.fonts.bold14
                        }}
                        title={LanguageText('homeScreen').request}
                        onPress={() => {
                            push(screensConst.newRequest)
                        }} />

                    <ContinueButton
                        secondary
                        style={{
                            flex: 1,
                            marginLeft: commonStyle.space15
                        }}
                        textStyle={{
                            ...commonStyle.fonts.bold14
                        }}
                        title={LanguageText('homeScreen').send}
                        onPress={() => {

                        }} />
                </View>
            </View>
        )
    }

    function transactionHeaderLayout() {
        return (
            <View style={styles.transationHeaderContainer}>
                <ViewBezier />

                <View style={styles.transationHeaderInnerContainer}>
                    <Text allowFontScaling={false}
                        style={styles.transationHeaderTitle}
                    >
                        {LanguageText('homeScreen').transactions}
                    </Text>

                    <Text allowFontScaling={false}
                        style={styles.transationHeaderSortBy}
                    >
                        {LanguageText('homeScreen').sortBy}
                    </Text>

                    <Text allowFontScaling={false}
                        style={styles.transationHeaderSortByValue}
                    >
                        {LanguageText('homeScreen').recent}
                    </Text>

                    <AllIcons
                        vectorName={AllIconsType.ioniconsIcons}
                        name={iconConstant.ioniconsDown}
                        size={18}
                        color={colors.kWhite}
                    />

                </View>

            </View>
        )
    }

    function renderItem({ item, index }) {
        return (
            <View style={[
                styles.itemContainer,
                (index % 2) == 0 && {
                    backgroundColor: colors.tertiaryBg
                }
            ]}>
                <FastImageWithPlaceholder
                    style={styles.itemImage}
                    source={{
                        uri: item?.image
                    }}
                    defaultSize={{
                        width: '100%',
                        height: '100%'
                    }}
                    resizeMode={'cover'}
                    defaultImageMode={'cover'}
                    defaultImage={getAssetByFilename(ImageSource.profilePlaceholder)}
                />

                <View style={styles.itemBodyContainer}>
                    <Text allowFontScaling={false}
                        style={styles.itemBodyUserName}
                    >
                        {item.name}
                    </Text>

                    <View style={styles.statusContainer(item.status)}>

                        <AllIcons
                            vectorName={transationStatusById(item.status).icon.vectorName}
                            name={transationStatusById(item.status).icon.name}
                            size={transationStatusById(item.status).icon.size}
                            color={transationStatusById(item.status).color}
                            style={styles.statusIcon}
                        />

                        <Text allowFontScaling={false}
                            style={styles.statusText}
                        >
                            {transationStatusById(item.status).title}
                        </Text>
                    </View>
                </View>

                <Text allowFontScaling={false}
                    style={styles.itemBodyPrice(item.status)}
                >
                    {`${AppConstant.currencySymbol} ${item.price.toLocaleString()}`}
                </Text>
            </View>
        )
    }

    return (
        <View style={commonStyle.commonContainer}>

            <SectionList
                style={styles.container}
                contentContainerStyle={{
                    paddingBottom: commonStyle.paddingOuter
                }}
                stickySectionHeadersEnabled
                sections={transactionList}
                renderSectionHeader={({ section: { key } }) => key == dashboardKey.header ? headerLayout() : transactionHeaderLayout()}
                renderItem={renderItem}
            />
        </View>
    );
}


export default DashboardView;