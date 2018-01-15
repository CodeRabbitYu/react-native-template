# react-native-template

致力于打造一个快速开发RN项目的模板

![登录效果](https://github.com/SurpassRabbit/react-native-template/blob/master/screenshots/Login.gif)

### 使用小技巧
##### 项目中常用的封装都放在app目录下Common文件夹
1、`FontSize.js`：基于屏幕分辨率封装的字体适配方法，使用方法：`fontSize:FONT_SIZE(14)`

2、`Tool.js`：封装常用的属性方法，比如说判断是否登录，或者其他的方法，在这个方法中，提供了用来做安卓，iOS换算px的方法，使用方法：`width:px2dp(100)`

3、`global.js`：全局变量方法，一般我会用来设置全局的方法，比如说：系统判断，屏幕宽高，主题设置，图片初始化。
具体的详情可以查看`global.js`内部注释。

4、`Config.js`：配置文件，可以用来配置请求网址，配置表等等。

5、`SetTheme.js`：更改主题，`teaset`提供了设置主题和切换主题的能力，但有些时候，有一些颜色需要再手动调整，所以创建了这个文件，通过在里面配置颜色，并在项目的入口中引入，就可以直接使用`Theme.backgroundColor`的方式调用颜色了。

6、`Request.js`：基于`react-native-fetch-blob`封装的网络请求方法，很简单，不喜勿喷。

7、`Images.js`：在`Resources`目录下有`index.js`和`Images.js`两个文件，这是基于`Marno`关于图片管理文章封装的实践。


### 2017.11.7更新说明
1、使用`teaset`的`SegmentedView`组件实现左右滑动的效果。

2、使用`teaset`的`Theme`控制页面中的颜色。

3、使用`Mobx`控制登录中的状态，简单使用。

4、修改`tabbar`选中图标和文字的颜色，使其更符合**识兔**项目的效果。


