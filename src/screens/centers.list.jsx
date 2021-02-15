import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import styled from 'styled-components';
import {MedicalCenterItem} from '../components/MedicalCenter.item';
import mock from '../mocks/centers.json';

const CentersList = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    setCenters(mock);
  }, []);

  return (
    <FlatList
      data={centers}
      ListHeaderComponent={<Title>מתחמי החיסון באזור תל אביב</Title>}
      renderItem={({item}) => <MedicalCenterItem item={item} />}
      keyExtractor={(item, index) => index}
      style={{paddingTop: 160}}
      scrollEventThrottle={5}
    />
  );
};

const Title = styled(Text)`
  margin: 15px;
  color: #141414;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 27px;
  text-align: left;
`;

export {CentersList};
