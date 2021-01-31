import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Screen} from '../ui/screen';
import {Button} from 'react-native-ui-lib';
import styled, {css} from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Instruction,
  InstructionDiv,
  InstructionSection,
  InstructionTitle,
} from '../ui/instruction';
import {Dropdown, Form, Input, Field} from '../ui/form';

const list = [{label: 'מכבי', value: 'מכבי'}];

const RegistrationScreen = ({navigation, route}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
    <Screen>
      <InstructionSection>
        <InstructionTitle>רישום לאיתור חיסון</InstructionTitle>
        <InstructionDiv>
          <Instruction>
            אנו מחוייבים לשמירה על פרטיותך. פרטים אלו לא יועברו לאף גורם אחר{' '}
          </Instruction>
        </InstructionDiv>
      </InstructionSection>
      <Form>
        <Input
          label="שם מלא"
          mode="outlined"
          onChangeText={(value) => {
            setValue('name', value);
          }}
        />
        <Field>
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
        </Field>
      </Form>
      <ConfirmButton
        label="המשך"
        backgroundColor="#B02D89"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
};

const ConfirmButton = styled(Button)`
  margin: auto auto 40px auto;
  width: 180px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {RegistrationScreen};
