/**
 * Created by Rabbit on 2017/11/2.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import './Common/SetTheme';
import './Common/Global';

import Router from './Router';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router/>
        );
    }
}

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated.  Please use BackHandler instead.',
    'source.uri should not be an empty string','Remote debugger is in a background tab which',
    'Setting a timer',
    'Encountered two children with the same key,',
    'Attempt to read an array index',
];

AppRegistry.registerComponent('SaiYa', () => index);