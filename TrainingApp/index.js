/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Welcome from './view/Welcome';

let fakedProducts = [
    {
        productName: 'Iphone 6S Plus',
        year: 2013,
    },
    {
        productName: 'Iphone 7S Plus',
        year: 2014,
    },
    {
        productName: 'Samsung J7 Prime',
        year: 2016,
    }
]

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => () =>
    <Welcome/>
);
