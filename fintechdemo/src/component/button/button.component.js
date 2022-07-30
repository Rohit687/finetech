import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './button.style';

export const ContinueButton = (props) => {
    return (

        <TouchableOpacity
            activeOpacity={(props.isDisabled == null || !props.isDisabled) ? 0.6 : 1}
            style={[
                styles.continueContainer,
                props.secondary && styles.continueSecondaryContainer,
                props.style
            ]}
            onPress={() => {
                if ((props.isDisabled == null || !props.isDisabled) && props.onPress) {
                    props.onPress()
                }
            }}
        >

            <Text
                ellipsizeMode='tail'
                allowFontScaling={false}
                style={[
                    styles.continueTextStyle,
                    props.secondary && styles.continueSecondaryText,
                    props.textStyle,

                ]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

