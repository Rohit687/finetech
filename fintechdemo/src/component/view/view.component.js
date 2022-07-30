import React, { } from 'react';
import { ScrollView, View } from 'react-native';
import { commonStyle } from '../../config';
import { AppConstant } from '../../constant/AppConstant';
import styles from './view.style';

export const EmptyView = ({ height = 10, width = 0, backgroundColor = 'transparent', flex = null }) => {
    if (flex) {
        if (width == 0) {
            return <View style={{
                flex: 1,
                height: height,
                backgroundColor: backgroundColor
            }} />
        } else {
            return <View style={{
                flex: 1,
                width: width,
                backgroundColor: backgroundColor
            }} />
        }

    }
    return <View style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
    }} />
}

export const ViewBezier = () => {
    return (
        <View style={styles.bezierContainer}>
            <View style={styles.bezierView} />
        </View>
    )
}


export const ContainerScrollView = (props) => {
    return (
        <ScrollView style={{
            width: '100%',
            flexGrow: 1
        }}
            contentContainerStyle={{
                flexGrow: 1
            }}
        >
            <View style={[commonStyle.commonContainer, {
                paddingHorizontal: commonStyle.paddingInner,
            },props.containerStyle]}>
                {props.children}
            </View>
        </ScrollView>
    )
}
