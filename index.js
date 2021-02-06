import React from 'react';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {Buffer} from 'buffer';
import App from './src/app';
import {name as appName} from './src/app.json';

import 'react-native-gesture-handler';

global.Buffer = Buffer;

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message in the background!', remoteMessage);
});

const Headless = ({isHeadless}) => {
  if (isHeadless) {
    return null;
  }
  return <App />;
};

AppRegistry.registerComponent(appName, () => Headless);
