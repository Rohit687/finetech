import React, { } from 'react';
import { Text, View } from 'react-native';
import { ContainerScrollView, ContinueButton, FastImageWithPlaceholder } from '../../../component';
import { commonStyle } from '../../../config';
import { AppConstant } from '../../../constant';
import { getAssetByFilename, ImageSource, LanguageText } from '../../../resource';
import styles from './newRequest.style';

function NewRequestView({ route: { params: { item : { name, image } } = {} } }) {

    AppConstant.showConsoleLog(name)
    return (
        <ContainerScrollView containerStyle={{
            paddingVertical: commonStyle.paddingInner
        }}>

            <View style={styles.imageOuterlayer}>
                <FastImageWithPlaceholder
                    style={styles.userImage}
                    source={{
                        uri: image
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
                {name}
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