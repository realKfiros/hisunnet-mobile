import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, Alert} from 'react-native';
import {MaskedInput} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import {padEnd} from 'lodash';
import auth from '@react-native-firebase/auth';
import styled from 'styled-components';
import {Screen} from '../ui/screen';
import {
  Instruction,
  InstructionDiv,
  InstructionSection,
  InstructionTitle,
  BoldInstruction,
} from '../ui/instruction';

const OTPScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [SMSVerification, setSMSVerification] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    createVerification();
  }, []);

  useEffect(() => {
    if (code.length === 6) {
      verify();
    }
  }, [code]);

  const createVerification = async () => {
    const verification = await auth().signInWithPhoneNumber(
      route.params.fullPhone,
    );
    setSMSVerification(verification);
  };

  const verify = async () => {
    try {
      await SMSVerification.confirm(code);
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert('Verification', 'Invalid code');
    }
  };

  renderTextCode = (value) => {
    const text = padEnd(value, 6, '__');
    return <CodeText>{text}</CodeText>;
  };

  return (
    <Screen>
      <View>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={27} />
        </BackButton>
        <InstructionSection>
          <InstructionTitle>קוד חד פעמי</InstructionTitle>
          <InstructionDiv>
            <Instruction>שלחנו קוד למספר</Instruction>
            <Instruction>{route.params.phone}</Instruction>
          </InstructionDiv>
          <BoldInstruction>יש להזין את הקוד שהתקבל</BoldInstruction>
        </InstructionSection>
        <MaskedInput
          renderMaskedText={renderTextCode}
          maxLength={6}
          value={code}
          keyboardType="phone-pad"
          ref={input}
          autoFocus
          onChangeText={(value) => setCode(value)}
        />
      </View>
    </Screen>
  );
};

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const CodeText = styled(Text)`
  margin: auto;
  letter-spacing: 25px;
  font-size: 27px;
`;

export {OTPScreen};
