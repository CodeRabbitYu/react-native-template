
import { AppRegistry } from 'react-native';
import './app/Common/SetTheme'
import './app/Common/Global'


import App from './App';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated.  Please use BackHandler instead.',
    'source.uri should not be an empty string','Remote debugger is in a background tab which',
    'Setting a timer',
    'Encountered two children with the same key,',
    'Attempt to read an array index',
];

AppRegistry.registerComponent('ReactNativeTemplate', () => App);
