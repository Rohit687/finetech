import { useFocusEffect } from '@react-navigation/native';
import React, { } from 'react';
import { View } from 'react-native';
import { commonStyle } from '../../../config/commonStyle';
import { changeAndroidBottomNavigationColor, changeAndroidStatusColor } from '../../../config/NativeBridge';
import { colors } from '../../../constant/colors';
import styles from './dashboard.style';

function DashboardView() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const flatListRef = useRef();
    // const imageSize = dimension.aspectRatio * 170;
    // useEffect(() => {

    // }, [])

    useFocusEffect(() => {
        changeAndroidStatusColor();
        changeAndroidBottomNavigationColor()
    }, [])

    return (
        <View style={commonStyle.commonContainer}>
           
        </View>


    );
}


export default DashboardView;