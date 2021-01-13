import React, {useState, useEffect} from 'react';
import {Text as TEXT} from 'react-native';
import Axios from 'axios';
import MapView, {Marker, UrlTile} from 'react-native-maps';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import styled from 'styled-components';
import {vw} from '../utils/css';

const CenterScreen = ({navigation, route}) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let request = await Axios.post('/ProviderDetails/', {
      ChapterId: '005',
      InitiatorCode: '001',
      IsKosher: 0,
      IsMobileApplication: 0,
      ItemKeyIndex: route.params.center.ItemKeyIndex,
      RequestId: 'ab4704f0-1b46-e636-ff9f-51ca8fd3abe7',
      Source: 'SearchPageResults',
    });
    setDetails(request.data);
  };

  return (
    <>
      {details && (
        <Map
          region={{
            latitude: parseFloat(details.Coordinatey),
            longitude: parseFloat(details.Coordinatex),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType={Platform.OS == 'android' ? 'none' : 'standard'}>
          <UrlTile
            urlTemplate="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19}
            flipY={false}
          />
          <Marker
            coordinate={{
              latitude: parseFloat(details.Coordinatey),
              longitude: parseFloat(details.Coordinatex),
            }}
          />
        </Map>
      )}
      <Text>כתובת: {details.Full_Adress}</Text>
      <Text>כמות חיסונים שנותרה: 18</Text>
      <Button>שריין חיסון</Button>
    </>
  );
};

const Map = styled(MapView)`
  margin: 20px;
  width: ${vw(100) - 40}px;
  height: ${vw(100) - 40}px;
`;

const Text = styled(TEXT)`
  direction: rtl;
  font-size: 18px;
  align-self: flex-end;
  margin: 10px;
`;

const Button = styled(AwesomeButton)`
  align-self: center;
`;

export {CenterScreen};
