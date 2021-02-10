import React, {useEffect, useState, useRef} from 'react';
import {Alert, I18nManager, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import {HomeScreen} from './screens/home.screen';
import {OnboardingScreen} from './screens/onboarding.screen';
import {PhoneInputScreen} from './screens/phoneInput.screen';
import {OTPScreen} from './screens/otp.screen';
import {RegistrationScreen} from './screens/registration.screen';
import {NotifiactionSettings} from './screens/notification.settings';
import {Settings} from './screens/general.settings';
import {SplashScreen} from './screens/splash.screen';
import {HomeNavigator} from './navigator/home.navigator';

I18nManager.forceRTL(true);

const Stack = createStackNavigator();

Axios.defaults.baseURL = 'https://serguide.maccabi4u.co.il/webapi/api';

const App = () => {
  useEffect(() => {
    // requestUserPermissionForNotifications();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  const requestUserPermissionForNotifications = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      let token = await messaging().getToken();
      console.log(token);
      console.log('Authorization status:', authStatus);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            options={{
              headerShown: false,
            }}
            component={SplashScreen}
          />
          <Stack.Screen
            name="Onboarding"
            options={{
              headerShown: false,
            }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="PhoneInput"
            options={{
              headerShown: false,
            }}
            component={PhoneInputScreen}
          />
          <Stack.Screen
            name="OTP"
            options={{
              headerShown: false,
            }}
            component={OTPScreen}
          />
          <Stack.Screen
            name="Registration"
            options={{
              headerShown: false,
            }}
            component={RegistrationScreen}
          />
          <Stack.Screen
            name="NotificationSettings"
            options={{
              headerShown: false,
            }}
            component={NotifiactionSettings}
          />
          <Stack.Screen
            name="Settings"
            options={{
              headerShown: false,
            }}
            component={Settings}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
