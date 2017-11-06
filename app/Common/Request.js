/**
 * Created by Rabbit on 2017/4/21.
 */
'use strict';
import RNFetchBlob from 'react-native-fetch-blob';
import queryString from 'query-string';

import {
    AsyncStorage
} from 'react-native';

const Request = {
    // 框架可以用过cancel 取消某个网络请求
    /**
     * 设置Header请求头
     */
    Header:{
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    /**
     * Config参数
     */
    GetConfig:{
        // 指示器,iOS专属
        indicator:true,
        // 超时
        timeout:3000
        // 缓存
        // fileCache : bool,
        // 缓存地址
        // path : string,
        // appendExt : string,
        // session : string,
        // addAndroidDownloads : any,
    },
    PostConfig:{
        indicator:true
    },
    UpLoadConfig:{
        indicator:true
    },
    /**
     * @param url               请求网址
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
    get: async (url, params, successCallBack, failCallBack) =>{

        // 如果项目中需要在每次网络请求的时候携带某个参数，可以再登录的时候将参数保存，
        // 通过async/await将该参数取出来并放进请求中。

        let userData = await AsyncStorage.getItem('USER_TOKEN');

        if (userData){
            userData = JSON.parse(userData);
            // console.log(userData);
        }

        if (params){
            url += '?' + queryString.stringify(params);
        }

        console.log(url);
        return RNFetchBlob
            .config(Request.GetConfig)
            .fetch('GET',url,Request.Header)
            .then((response) => {
            // console.log(response);
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response.json());
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                console.log(error);
                failCallBack(error);
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的参数
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns {Promise.<U>|Promise.<T>}
     */
    post: async (url, body, successCallBack, failCallBack) =>{

        console.log(url);

        return RNFetchBlob
            .config(Request.PostConfig)
            .fetch('POST',url,Request.Header, JSON.stringify(body))
            .then((response) => {
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response.json());
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的信息,会自动转码
     * @param uploadProgress    上传进度
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
    upload:(url,body,uploadProgress,successCallBack,failCallBack) => {
        return RNFetchBlob
            .config(Request.UpLoadConfig)
            .fetch('POST',url,{
            'Content-Type' : 'multipart/form-data',
        },body)
            .uploadProgress((written, total) => {
                // 搜索进度打印
                // console.log('搜索进度:'+written / total);
            })
            .progress((received, total) => {
                let perent = received / total;
                // console.log('上传进度:' + perent);
                uploadProgress(perent);
            })
            .then((response)=>{
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=> {
                // console.log(response);
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }
};

export default Request;
