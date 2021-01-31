import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Screen} from '../ui/screen';
import {
  Instruction,
  InstructionDiv,
  InstructionTitle,
  MiniTitle,
} from '../ui/instruction';
import {Dropdown, Field, Form, Input} from '../ui/form';
import {Checkbox, Button} from 'react-native-ui-lib';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const list = [{label: 'מכבי', value: 'מכבי'}];

const Settings = ({navigation, route}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [close, setClose] = useState(false);
  const [reload, setReload] = useState(false);

  const {register, setValue, getValues, handleSubmit} = useForm();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setReload(true);
  }, [getValues('name', 'healthService')]);

  const init = async () => {
    register('name', {
      required: true,
    });
    register('healthService', {
      required: true,
    });
    register('notifyClose', {
      required: true,
    });
    if (route.params.firstTime) {
      setValue('name', route.params.name);
      setValue('healthService', route.params.healthService);
      setValue('notifyClose', route.params.notifyClose);
    } else {
      let name = await AsyncStorage.getItem('name');
      setValue('name', name);
      let healthService = await AsyncStorage.getItem('healthService');
      setValue('healthService', healthService);
      let notifyClose = await AsyncStorage.getItem('notifyClose');
      setValue('notifyClose', JSON.parse(notifyClose));
    }
  };

  const onSubmit = async (data) => {
    await AsyncStorage.setItem('name', data.name);
    await AsyncStorage.setItem('healthService', data.healthService);
    await AsyncStorage.setItem('notifyClose', JSON.stringify(data.notifyClose));
    navigation.navigate('Home');
  };

  return reload ? (
    <Screen>
      <Form>
        <InstructionDiv>
          <InstructionTitle>רישום לאיתור חיסון</InstructionTitle>
          <InstructionDiv>
            <Instruction>
              אנו מחוייבים לשמירה על פרטיותך. פרטים אלו לא יועברו לאף גורם אחר{' '}
            </Instruction>
          </InstructionDiv>
        </InstructionDiv>
        <Input
          label="שם מלא"
          mode="outlined"
          onChangeText={(value) => {
            setValue('name', value);
          }}
          value={getValues('name')}
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
        <InstructionDiv>
          <InstructionTitle>רישום לקבלת הודעות</InstructionTitle>
        </InstructionDiv>
        <InstructionDiv>
          <MiniTitle>אני רוצה לקבל הודעות על זמינות חיסונים:</MiniTitle>
        </InstructionDiv>
        <Checkbox
          color="#B02D89"
          label="קרוב אליי"
          value={getValues('notifyClose')}
          onValueChange={(value) => setValue('notifyClose', value)}
          containerStyle={{marginLeft: 15}}
        />
      </Form>
      <ConfirmButton
        label="שמירה"
        backgroundColor="#B02D89"
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  ) : null;
};

const ConfirmButton = styled(Button)`
  margin: auto auto 40px auto;
  width: 180px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {Settings};
