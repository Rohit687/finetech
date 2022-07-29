import React, { } from 'react';
import { Text, View } from 'react-native';
import { ContainerScrollView, ContinueButton, FastImageWithPlaceholder } from '../../../component';
import { commonStyle } from '../../../config';
import { AppConstant } from '../../../constant';
import { getAssetByFilename, ImageSource, LanguageText } from '../../../resource';
import styles from './newRequest.style';

function NewRequestView() {

    return (
        <ContainerScrollView containerStyle={{
            paddingVertical: commonStyle.paddingInner
        }}>

            <View style={styles.imageOuterlayer}>
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
            </View>
            <Text allowFontScaling={false}
                style={styles.username}
            >
                Adeleke Ramon
            </Text>
            <Text allowFontScaling={false}
                style={styles.reqFor}
            >
                {LanguageText('newRequest').reqFor}
            </Text>
            <Text allowFontScaling={false}
                style={styles.reqPrice}
            >
                {`${AppConstant.currencySymbol} ${200000..toLocaleString()}`}
            </Text>

            <ContinueButton
                style={[{
                    marginTop: commonStyle.space40,
                }, styles.button]}
                textStyle={{
                    ...commonStyle.fonts.semiBold17
                }}
                title={LanguageText('homeScreen').send}
                onPress={() => {
                }} />

            <ContinueButton
                secondary
                style={styles.button}
                textStyle={{
                    ...commonStyle.fonts.semiBold17
                }}
                title={LanguageText('newRequest').notSend}
                onPress={() => {
                }} />

        </ContainerScrollView>
    );
}

export default NewRequestView;