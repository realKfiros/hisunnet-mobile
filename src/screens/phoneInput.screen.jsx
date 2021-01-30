import React, {useState, useRef, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-ui-lib';
import PhoneInput from 'react-native-phone-number-input';
import styled from 'styled-components';

const PhoneInputScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [fullPhone, setFullPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const phoneInput = useRef(null);

  useEffect(() => {
    if (phoneInput && phoneInput.current)
      setIsPhoneValid(phoneInput.current.isValidNumber(phone));
  }, [phone]);

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
          <Phone
            placeholder="מספר טלפון"
            defaultCode="IL"
            layout="first"
            withShadow
            containerStyle={{
              direction: 'ltr',
              borderColor: '#000',
            }}
            ref={phoneInput}
            value={phone}
            onChangeText={(value) => setPhone(value)}
            onChangeFormattedText={(value) => setFullPhone(value)}
          />
        </PhoneInputWrapper>
        {isPhoneValid && (
          <ConfirmButton
            label="לקבלת קוד"
            backgroundColor="#B02D89"
            onPress={() => navigation.navigate('OTP', {phone, fullPhone})}
          />
        )}
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
  justify-content: center;
`;

const Phone = styled(PhoneInput)`
  flex: 1;
  margin-right: 15px;
`;

const ConfirmButton = styled(Button)`
  margin: 30px auto;
  width: 180px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {PhoneInputScreen};
