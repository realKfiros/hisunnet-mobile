import {View, Text} from 'react-native';
import styled from 'styled-components';

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

const InstructionTitle = styled(Text)`
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

const BoldInstruction = styled(Text)`
  color: #141414;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;

const MiniTitle = styled(Text)`
  color: #141414;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
  text-align: left;
  font-weight: bold;
`;

const MoreInfo = styled(Text)`
  opacity: 0.6;
  color: #141414;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

export {
  InstructionSection,
  InstructionDiv,
  InstructionTitle,
  Instruction,
  BoldInstruction,
  MiniTitle,
  MoreInfo,
};
