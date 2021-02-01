import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StatusBar} from 'react-native';
import {Button} from 'react-native-ui-lib';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components';
import {Screen} from '../ui/screen';
import MinusBorderRadius from '../../assets/svg/minus-border-radius';
import LocationIcon from '../../assets/svg/location';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let _name = await AsyncStorage.getItem('name');
    setName(_name);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    await auth().signOut();
  };

  return (
    <Screen light>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <TopSection>
        <TopSectionContent>
          <Toolbar>
            <SettingsButton
              onPress={() => navigation.push('Settings', {firstTime: false})}>
              <FontAwesome name="cog" />
            </SettingsButton>
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
      <Content>
        <AvailabilityArea>
          <AvailabilityMessage>
            נמצאו מנות חיסון זמינות באזורך
          </AvailabilityMessage>
          <BrandButton
            label="להצגת מתחמי החיסון"
            iconOnLeft
            iconSource={LocationIcon}
            labelStyle={{
              margin: 10,
              fontSize: 20,
            }}
            style={{
              paddingTop: 23,
              paddingBottom: 23,
              paddingStart: 34,
              paddingEnd: 34,
            }}
          />
        </AvailabilityArea>
      </Content>
    </Screen>
  );
};

const TopSection = styled(View)`
  height: 235px;
`;

const TopSectionContent = styled(View)`
  height: 155px;
  background-color: #0d47a1;
  border-bottom-left-radius: 80px;
`;

const Toolbar = styled(View)`
  height: 75px;
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

const Content = styled(View)`
  display: flex;
  flex-direction: column;
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

const AvailabilityArea = styled(View)`
  margin: 24px auto;
`;

const BrandButton = styled(Button)`
  margin: 24px auto;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
  background-color: #b02d89;
`;

const AvailabilityMessage = styled(Text)`
  height: 70px;
  width: 288px;
  color: #141414;
  font-size: 28px;
  letter-spacing: 0;
  line-height: 35px;
  text-align: center;
`;

export {HomeScreen};
