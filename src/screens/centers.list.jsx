import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {MedicalCenterItem} from '../components/MedicalCenter.item';

const CentersList = () => {
  const [centers] = useState([
    {
      name: 'היכל מנורה מבטחים',
      address: 'איזיק רמבה 7',
      city: 'תל אביב',
    },
    {
      name: 'האנגר 11',
      address: 'בלפור 3',
      city: 'תל אביב',
    },
    {
      name: 'כיכר רבין',
      address: 'אבן גבירוך 124',
      city: 'תל אביב',
    },
  ]);
  return (
    <FlatList
      data={centers}
      renderItem={({item}) => <MedicalCenterItem item={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

export {CentersList};
