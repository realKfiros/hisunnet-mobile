import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PhoneInputScreen = () => {
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('IL');
  const [country, setCountry] = useState({
    callingCode: ['972'],
    cca2: 'IL',
    currency: ['NIS'],
    flag: 'flag-il',
    name: 'Israel',
    region: 'Asia',
    subregion: 'Middle East',
  });

  const onCountrySelect = (country) => {
    console.log(country);
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <>
      <SafeAreaView />
      <View style={{justifyContent: 'center'}}>
        <InstructionSection>
          <Title>קוד אימות ונתחיל</Title>
          <Instruction>יש להזין מספר טלפון לקבלת קוד אימות חד פעמי</Instruction>
          <MoreInfo>וגם כדי לשלוח לך את פרטי התור שיקבע</MoreInfo>
        </InstructionSection>
        <PhoneInputWrapper>
          <PhoneInput
            label="מספר טלפון"
            mode="outlined"
            keyboardType="phone-pad"
            autoFocus={false}
            style={{textAlign: 'left'}}
          />
          <CountryPicker
            {...{
              countryCode,
              country,
            }}
            withFlag
            withEmoji
            withCallingCode
            withCallingCodeButton
            onSelect={onCountrySelect}
            onClose={() => setCountryPickerVisible(false)}
            visible={countryPickerVisible}
            containerButtonStyle={{
              marginTop: 'auto',
              marginBottom: 'auto',
              direction: 'ltr',
            }}
          />
        </PhoneInputWrapper>
      </View>
    </>
  );
};

const InstructionSection = styled(View)`
  margin: 15px;
  margin-top: 100px;
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

const MoreInfo = styled(Text)`
  opacity: 0.6;
  color: #141414;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

const PhoneInputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 15px;
  padding-top: 40px;
`;

const PhoneInput = styled(TextInput)`
  flex: 1;
  margin-right: 15px;
`;

export {PhoneInputScreen};
