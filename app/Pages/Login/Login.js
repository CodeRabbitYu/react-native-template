/**
 * Created by Rabbit on 2017/11/2.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,

    TouchableOpacity,
} from 'react-native';

import { SegmentedView, Button, NavigationBar, Overlay, Input , } from 'teaset';
import { observer } from 'mobx-react/native'
import { observable, computed, action, runInAction } from 'mobx'


import LoginInput from './Component/LoginInput';


const LoginView = (props) => {
    return(
        <View style={styles.loginViewStyle}>
            <LoginInput placeholder='请输入手机号'
                        onChangeText={props.onChangeTopText}
            />
            {
                props.isPass ?
                    <View>
                        <LoginInput placeholder='请输入密码'
                                    onChangeText={props.onChangeBottomText}
                        />
                        <View style={{
                            backgroundColor:Theme.transparentColor,
                            justifyContent:'flex-end',
                            alignItems:'flex-end',

                        }}>
                            <Text style={styles.forgetPassStyle}
                                  onPress={()=>Actions.LoginPublic({headerTitle:'重置密码'})}
                            >
                                忘记密码
                            </Text>
                        </View>
                    </View>
                    :
                    <View >
                        <LoginInput isVerify={true}
                                    placeholder='请输入验证码'
                                    getVerifyCode={props.getVerifyCode}
                                    onChangeText={props.onChangeBottomText}
                                    onFocus={props.verifyFocus}
                        />
                        {
                            props.isImage?
                                <LoginInput isImage={props.isImage}
                                            placeholder='请先输入图片验证码'
                                            onChangeText={props.onChangeBottomText}
                                            getVerifyCode={props.getVerifyCode}
                                            refreshImage={props.refreshImage}
                                            imageUrl={props.imageUrl}
                                            onBlur={props.imageCodeBlur}
                                />
                            :
                            null
                        }
                        <View style={{height: px2dp(60)}}/>
                    </View>
            }

            <Button title={'登录'}
                    style={styles.loginButtonStyle}
                    titleStyle={{fontSize:FONT_SIZE(14), color:'#fff'}}
                    onPress={props.onPress}
            />
            <View style={{flex:1,alignItems:'center',marginTop:px2dp(44)}}>
                <Text style={styles.createAccountStyle}
                      onPress={()=>Actions.LoginPublic({headerTitle:'创建账号'})}
                >
                    创建账号
                </Text>
            </View>
        </View>
    )
}

@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    @observable mobileCode = '';
    @observable verifyCode = '';
    @observable passCode = '';
    @observable isImage = false;
    render() {
        console.log(this.imageUrl);
        return (
            <View style={styles.container}>
                <NavigationBar title='登录'
                               style={{height:64,backgroundColor:'white'}}
                               statusBarStyle='default'
                               rightView={
                                   <TouchableOpacity onPress={()=>Actions.pop()}>
                                       <Text>关闭</Text>
                                   </TouchableOpacity>
                               }
                />
                <SegmentedView style={{height:SCREEN_HEIGHT - 64 ,marginTop:64, backgroundColor:'#F9F9F9'}}
                               type='carousel'
                               indicatorLineColor={'#000'}
                >
                    <SegmentedView.Sheet title='短信登录'
                                         titleStyle={{color:'#666'}}
                                         activeTitleStyle={{color:'#333'}}
                    >
                        <LoginView  onPress={()=>this.onLoginPress(1)}
                                    getVerifyCode={()=>{}}
                                    onChangeTopText={(text)=>{
                                        this.mobileCode = text;
                                    }}
                                    onChangeBottomText={(text)=>{
                                        this.verifyCode = text;
                                    }}
                        />
                    </SegmentedView.Sheet>
                    <SegmentedView.Sheet title='密码登录'
                                         titleStyle={{color:'#333'}}
                                         activeTitleStyle={{color:'#000'}}
                    >
                        <LoginView isPass={true}
                                   onPress={()=>this.onLoginPress(2)}
                                   onChangeTopText={(text)=>{
                                       // console.log(text)
                                       this.mobileCode = text;
                                   }}
                                   onChangeBottomText={(text)=>{
                                       // console.log(text);
                                       this.passCode = text;
                                   }}
                        />

                    </SegmentedView.Sheet>
                </SegmentedView>
            </View>
        );
    }


    onLoginPress = (code)=>{

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F9F9F9'
    },
    loginViewStyle:{
        // backgroundColor:'red',
        marginTop:px2dp(80)
    },
    loginButtonStyle:{
        marginLeft:px2dp(108),
        marginRight:px2dp(108),
        height:px2dp(80),
        marginTop:px2dp(142),
        backgroundColor:'#ff7000',
        borderColor:Theme.transparentColor,
        borderRadius:20

    },
    createAccountStyle:{
        color:'#ff7000',
        fontSize:FONT_SIZE(13),

    },
    forgetPassStyle:{
        marginTop:px2dp(28),
        height:px2dp(32),
        marginRight:px2dp(108),
        color:'#ff7000',
        fontSize:FONT_SIZE(12),
    }
});