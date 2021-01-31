import React from 'react';
import {Screen} from '../ui/screen';
import {
  Instruction,
  InstructionDiv,
  InstructionSection,
  InstructionTitle,
  MiniTitle,
} from '../ui/instruction';

const NotifiactionSettings = ({navigation, route}) => {
  return (
    <Screen>
      <InstructionSection>
        <InstructionTitle>רישום לקבלת הודעות</InstructionTitle>
        <Instruction>מומלץ להירשם אם עוד לא מצאת חיסון שמתאים לך</Instruction>
      </InstructionSection>
      <InstructionDiv>
        <MiniTitle>אני רוצה לקבל הודעות על זמינות חיסונים:</MiniTitle>
      </InstructionDiv>
    </Screen>
  );
};

export {NotifiactionSettings};
