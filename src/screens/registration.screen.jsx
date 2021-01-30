import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, View, Text} from 'react-native';
import {Provider, TextInput} from 'react-native-paper';
import {Button} from 'react-native-ui-lib';
import DropDown from 'react-native-paper-dropdown';
import styled, {css} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const list = [{label: 'מכבי', value: 'מכבי'}];

const RegistrationScreen = ({navigation, route}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [center, setCenter] = useState();

  const {register, setValue, getValues, handleSubmit} = useForm();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const name = await AsyncStorage.getItem('name');
    if (name) {
      navigation.navigate('Home');
    } else {
      register('name', {
        required: true,
      });
      register('healthService', {
        required: true,
      });
    }
  };

  const onSubmit = (data) => {
    navigation.navigate('NotificationSettings', data);
  };

  return (
    <>
      <SafeAreaView />
      <InstructionSection>
        <Title>רישום לאיתור חיסון</Title>
        <InstructionDiv>
          <Instruction>
            אנו מחוייבים לשמירה על פרטיותך. פרטים אלו לא יועברו לאף גורם אחר{' '}
          </Instruction>
        </InstructionDiv>
      </InstructionSection>
      <Provider>
        <Input
          label="שם מלא"
          mode="outlined"
          onChangeText={(value) => {
            setValue('name', value);
          }}
        />
        <FieldWrap>
          <Dropdown
            label="קופת חולים"
            mode="outlined"
            list={list}
            visible={dropdownVisible}
            showDropDown={() => setDropdownVisible(true)}
            onDismiss={() => setDropdownVisible(false)}
            setValue={(value) => {
              setValue('healthService', value);
            }}
            value={getValues('healthService')}
          />
        </FieldWrap>
      </Provider>
      <ConfirmButton
        label="המשך"
        backgroundColor="#B02D89"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};

const InstructionSection = styled(View)`
  margin: 15px;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
`;

const InstructionDiv = styled(View)`
  margin: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
`;

const Title = styled(Text)`
  color: #141414;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 41px;
  text-align: center;
  /* margin: 0 75px; */
`;

const Instruction = styled(Text)`
  color: #141414;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
`;

const Field = css`
  margin: 15px 30px;
`;

const Input = styled(TextInput)`
  ${Field}
`;

const FieldWrap = styled(View)`
  ${Field}
`;

const Dropdown = styled(DropDown)`
  ${Field}
`;

const ConfirmButton = styled(Button)`
  margin: auto auto 40px auto;
  width: 180px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {RegistrationScreen};
