/**
 * Created by Rabbit 下午6:40
 */

import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

const TabIcon = (props) => {
    // console.log(props);
    return(
        <View>
            <Image
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height:25,width:25 }]}
            />
            <Text
                style={{color: '#fff',marginTop:px2dp(6),fontSize:FONT_SIZE(10)}}
            >
                {props.title}
            </Text>
        </View>
    )
};


export default TabIcon;