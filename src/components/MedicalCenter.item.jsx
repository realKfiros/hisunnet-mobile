import React from 'react';
import {View, TouchableOpacity, Text as TEXT} from 'react-native';
import {Button} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled, {css} from 'styled-components';
import {BoxShadow} from '../utils/box-shadow';
import {vw} from '../utils/css';

const MedicalCenterItem = ({item, onPress}) => {
  return (
    <BoxShadow>
      <Card onPress={onPress} style={{elevation: 1}}>
        <CardItem>
          <CenterIcon>
            <Icon name="map-marker" size={35} />
          </CenterIcon>
          <CenterName>
            <Title>{item.name}</Title>
            <Text small>
              {item.address}, {item.city}
            </Text>
          </CenterName>
          <DistanceText>
            <Text small>{item.distance}</Text>
          </DistanceText>
        </CardItem>
        <Break />
        <CardItem>
          <AvailabilityText>
            <Title>זמינות תורים</Title>
            <Text small>החל מהשעה {item.availability}</Text>
          </AvailabilityText>
          <ReserveArea>
            <ReserveButton
              label="לקבלת תור"
              backgroundColor="#B02D89"
              onPress={onPress}
            />
          </ReserveArea>
        </CardItem>
      </Card>
    </BoxShadow>
  );
};

const Card = styled(View)`
  display: flex;
  flex-direction: column;
  border-radius: ${vw(2.22222)}px;
  background-color: #fff;
  justify-content: center;
  margin-bottom: ${vw(2.77778)}px;
  direction: rtl;
  margin: 15px;
`;

const CardItem = styled(View)`
  display: flex;
  flex-direction: row;
  height: 75px;
  justify-content: center;
  margin-bottom: ${vw(2.77778)}px;
  direction: rtl;
`;

const TextItem = css`
  font-size: ${(props) => (props.small ? 15 : 18)}px;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: auto;
`;

const Title = styled(TEXT)`
  ${TextItem};
  font-weight: 900;
`;

const Text = styled(TEXT)`
  ${TextItem};
`;

const SubItem = (widthPercentage) => css`
  width: ${widthPercentage}%;
  margin: ${vw(4.16667)}px 0;
  padding: 0 ${vw(2.22222)}px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  direction: ltr;
`;

const CenterIcon = styled(View)`
  ${SubItem(20)};
  align-items: center;
`;

const CenterName = styled(View)`
  ${SubItem(60)}
`;

const DistanceText = styled(View)`
  ${SubItem(20)};
  align-items: center;
`;

const AvailabilityText = styled(View)`
  ${SubItem(60)};
`;

const ReserveArea = styled(View)`
  ${SubItem(30)};
  align-items: center;
`;

const Break = styled(View)`
  height: 1px;
  margin: 0 20px;
  opacity: 0.1;
  background-color: #000000;
`;

const ReserveButton = styled(Button)`
  margin: auto;
  width: 150px;
  box-shadow: 0 12px 16px rgba(176, 45, 137, 0.3);
`;

export {MedicalCenterItem};
