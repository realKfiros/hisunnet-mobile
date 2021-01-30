import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styled from 'styled-components';

const NotifiactionSettings = ({navigation, route}) => {
  return (
    <>
      <SafeAreaView />
      <InstructionSection>
        <Title>רישום לקבלת הודעות</Title>
        <Instruction>מומלץ להירשם אם עוד לא מצאת חיסון שמתאים לך</Instruction>
      </InstructionSection>
      <InstructionDiv>
        <MiniTitle>אני רוצה לקבל הודעות על זמינות חיסונים:</MiniTitle>
      </InstructionDiv>
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

const MiniTitle = styled(Text)`
  color: #141414;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: left;
  font-weight: bold;
`;

export {NotifiactionSettings};
