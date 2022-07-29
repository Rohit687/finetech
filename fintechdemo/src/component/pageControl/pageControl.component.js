import React from 'react';
import { View } from 'react-native';
import { colors } from '../../constant/colors';
import styles from './pageControl.styles';

export const PageControl = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {
                [...Array(props.count)].map((x, i) =>

                    <View
                        key={`${i}_pageControl`}
                        style={[styles.controllerStyle, {
                            backgroundColor: props.selectedIndex == i ? props.selectedColor :
                                (props.unselectedColor ? props.unselectedColor : colors.kTransparent),
                        },
                        props.selectedIndex == i && {
                            width: 35
                        },
                            , props.controllerStyle]} />
                )}
        </View>
    );
};