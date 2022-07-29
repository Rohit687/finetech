import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constant/colors';
import styles from './button.style';

export const ContinueButton = (props) => {
    return (

        <TouchableOpacity
            activeOpacity={(props.isDisabled == null || !props.isDisabled) ? 0.6 : 1}
            style={[
                styles.continueContainer,
                props.style,
                props.isGray && {
                    borderWidth:1,
                    borderColor:colors.kLightGray
                }
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
                    props.textStyle,
                    props.isGray && {
                        color: colors.kBlack
                    }
                ]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

