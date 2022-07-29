import React, { useState } from 'react';
import { Image } from "react-native";
import FastImage from 'react-native-fast-image';

export const FastImageWithPlaceholder = (props) => {
  const [isLoaded, setIsLoaded] = useState(true);
 
  return (
    <FastImage
      {...props}
      style={[{
        justifyContent: 'center',
        alignItems: 'center',
      }, props.style]}
      onLoadStart={() => {
        setIsLoaded(false);
      }}
      // onProgress={e => AppConstant.showConsoleLog('onProgress:', e.nativeEvent)}
      onLoad={e => {
        // AppConstant.showConsoleLog('onLoad:', e.nativeEvent)
        if (e.nativeEvent.width != null) {
          setIsLoaded(true);
          if (props.loadedSize != null) {
            props.loadedSize(e.nativeEvent);
          }
        }
      }}
    // onError={() => AppConstant.showConsoleLog('onError:')}
    // onLoadEnd={() => {
    //   AppConstant.showConsoleLog('onLoadEnd:')
    //   // setIsLoaded(true)
    // }}
    >
      {(!isLoaded || props.source.uri == null || props.source.uri == '') && props.defaultImage && <Image style={{
        width: props?.defaultImageWidth || '70%',
        height: props?.defaultImageHeight || '70%',
        // width: '100%',
        // height: '100%',
        overflow: 'hidden',
        // backgroundColor: colors.kWhite,
        resizeMode: props?.defaultImageMode || 'contain'
      }}
        source={props.defaultImage}
      />}

      {
        props.children
      }

    </FastImage>

  )
}