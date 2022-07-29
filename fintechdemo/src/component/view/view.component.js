import React, { } from 'react';
import { View } from 'react-native';
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
