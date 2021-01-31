import React, {useState} from 'react';
import {Screen} from '../ui/screen';
import {
  Instruction,
  InstructionDiv,
  InstructionSection,
  InstructionTitle,
  MiniTitle,
} from '../ui/instruction';
import {Checkbox, Button} from 'react-native-ui-lib';
import styled from 'styled-components';

const NotifiactionSettings = ({navigation, route}) => {
  const [close, setClose] = useState(false);
  return (
    <Screen>
      <InstructionSection>
        <InstructionTitle>רישום לקבלת הודעות</InstructionTitle>
        <Instruction>מומלץ להירשם אם עוד לא מצאת חיסון שמתאים לך</Instruction>
      </InstructionSection>
      <InstructionDiv>
        <MiniTitle>אני רוצה לקבל הודעות על זמינות חיסונים:</MiniTitle>
      </InstructionDiv>
      <Checkbox
        color="#B02D89"
        label="קרוב אליי"
        value={close}
        onValueChange={() => setClose(!close)}
        containerStyle={{marginLeft: 15}}
      />
      <ConfirmButton
        label="איתור חיסון"
        backgroundColor="#B02D89"
        onPress={() =>
          navigation.navigate('Settings', {
            ...route.params,
            notifyClose: close,
            firstTime: true,
          })
        }
      />
    </Screen>
  );
};

const ConfirmButton = styled(Button)`
  margin: auto auto 40px auto;
  width: 180px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {NotifiactionSettings};
