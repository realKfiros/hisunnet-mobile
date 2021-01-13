import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import {HomeScreen} from './screens/home.screen';
import {CenterScreen} from './screens/center.screen';
import {StatusBar} from 'react-native';

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
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Center" component={CenterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
