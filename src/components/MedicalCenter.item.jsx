import React from 'react';
import {View, TouchableOpacity, Text as TEXT} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled, {css} from 'styled-components';
import {BoxShadow} from '../utils/box-shadow';
import {vw} from '../utils/css';

const MedicalCenterItem = ({item, onPress}) => {
  return (
    <BoxShadow>
      <Card onPress={onPress} style={{elevation: 1}}>
        <CenterIcon>
          <Icon name="map-marker" size={35} color="rgba(255, 255, 255, 0.7)" />
        </CenterIcon>
        <CenterName>
          <Text>{item.SERVICE_NAME}</Text>
          <Text small>
            {item.PARTIALLY_ADRESS}, {item.CITY_NAME}
          </Text>
        </CenterName>
      </Card>
    </BoxShadow>
  );
};

const Card = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  border-radius: ${vw(2.22222)}px;
  background-color: #34405d;
  height: ${vw(20.83333)}px;
  justify-content: center;
  margin-bottom: ${vw(2.77778)}px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  direction: rtl;
`;

const Text = styled(TEXT)`
  font-size: ${(props) => (props.small ? 15 : 18)}px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: auto;
`;

const SubItem = (widthPercentage) => css`
  width: ${widthPercentage}%;
  margin: ${vw(4.16667)}px 0;
  padding: 0 ${vw(2.22222)}px;
  display: flex;
  align-items: center;
  text-align: center;
  direction: ltr;
`;

const CenterName = styled(View)`
  ${SubItem(80)}
`;

const CenterIcon = styled(View)`
  ${SubItem(20)}
`;

export {MedicalCenterItem};
