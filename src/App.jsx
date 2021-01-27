import React from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import {HomeScreen} from './screens/home.screen';
import {OnboardingScreen} from './screens/onboarding.screen';

I18nManager.forceRTL(true);

const Stack = createStackNavigator();

Axios.defaults.baseURL = 'https://serguide.maccabi4u.co.il/webapi/api';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            options={{
              headerShown: false,
            }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{
              title: 'חיפוש',
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
