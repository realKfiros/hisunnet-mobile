import React, {useEffect, useState, useRef} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import auth from '@react-native-firebase/auth';
import {HomeScreen} from './screens/home.screen';
import {OnboardingScreen} from './screens/onboarding.screen';
import {PhoneInputScreen} from './screens/phoneInput.screen';
import {OTPScreen} from './screens/otp.screen';
import {RegistrationScreen} from './screens/registration.screen';
import {NotifiactionSettings} from './screens/notification.settings';
import {Settings} from './screens/general.settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

Axios.defaults.baseURL = 'https://serguide.maccabi4u.co.il/webapi/api';

const App = () => {
  const [user, setUser] = useState();
  const navigation = useRef(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    navigate();
  }, [user]);

  const onAuthStateChanged = (user) => {
    setUser(user);
  };

  const navigate = async () => {
    if (user) {
      let name = await AsyncStorage.getItem('name');
      if (typeof name === 'string') {
        navigation.current?.navigate('Home');
      } else {
        navigation.current?.navigate('Registration');
      }
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer ref={navigation}>
        <Stack.Navigator>
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
              headerTintColor: '#0D47A1',
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
