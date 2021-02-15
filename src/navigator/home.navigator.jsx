import React, {useEffect, useRef, useState} from 'react';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {HomeScreen} from '../screens/home.screen';
import {Screen} from '../ui/screen';
import MinusBorderRadius from '../../assets/svg/minus-border-radius';
import {SvgUri} from 'react-native-svg';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {CentersList} from '../screens/centers.list';

const Stack = createStackNavigator();

const HomeNavigator = ({navigation}) => {
  const [name, setName] = useState('');
  const _navigator = useRef(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let _name = await AsyncStorage.getItem('name');
    setName(_name);
  };

  return (
    <Screen light>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation, route}) => ({
          headerTransparent: true,
          header: () => (
            <TopSection>
              <TopSectionContent>
                <Toolbar>
                  <SettingsButton onPress={() => navigation.push('Settings')}>
                    <FontAwesome name="cog" />
                  </SettingsButton>
                  <SVG
                    height="144"
                    uri="https://projects.invisionapp.com/assets/21004701/968353254/FCDE12868D1A689F3BBA19573FD8A5470B2F4DD0CAAD267D8714A6862E6C0270/download?cacheVersion=6"
                    fill="#fff"
                  />
                  {route.name !== 'Home' && (
                    <BackButton onPress={() => navigation.goBack()}>
                      <FontAwesome name="arrow-left" />
                    </BackButton>
                  )}
                </Toolbar>
                <WelcomeSection>
                  <Title>שלום {name.split(' ')[0]}</Title>
                </WelcomeSection>
              </TopSectionContent>
              <LeftBorderRadius
                color="#0D47A1"
                width={80}
                height={160}
                style={{
                  transform: [{rotate: '180deg'}],
                }}
              />
            </TopSection>
          ),
        })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Centers" component={CentersList} />
      </Stack.Navigator>
    </Screen>
  );
};

const TopSection = styled(View)`
  height: 235px;
  background-color: transparent;
`;

const TopSectionContent = styled(View)`
  height: 155px;
  background-color: #0d47a1;
  border-bottom-left-radius: 80px;
`;

const Toolbar = styled(View)`
  height: 75px;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const SettingsButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 27px;
`;

const LeftBorderRadius = styled(MinusBorderRadius)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 160px;
`;

const WelcomeSection = styled(View)`
  height: 80px;
  justify-content: center;
`;

const Title = styled(Text)`
  color: #fff;
  font-size: 28px;
  text-align: center;
`;

const SVG = styled(SvgUri)`
  margin: auto;
`;

export {HomeNavigator};
