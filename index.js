/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Buffer} from 'buffer';

global.Buffer = Buffer;

AppRegistry.registerComponent(appName, () => App);
