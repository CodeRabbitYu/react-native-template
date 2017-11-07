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
                style={[{ height:27,width:27,marginTop:5,tintColor:props.tintColor }]}
            />
            <Text
                style={{paddingLeft:px2dp(5),color:props.tintColor,marginTop:px2dp(6),fontSize:FONT_SIZE(10)}}
            >
                {props.title}
            </Text>
        </View>
    )
};


export default TabIcon;