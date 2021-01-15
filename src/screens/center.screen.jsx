import React, {useState, useEffect} from 'react';
import {Text as TEXT, View, Linking, Modal} from 'react-native';
import Axios from 'axios';
import MapView, {Marker, UrlTile} from 'react-native-maps';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/rick';
import styled, {css} from 'styled-components';
import {vw} from '../utils/css';
import {BoxShadow} from '../utils/box-shadow';

const CenterScreen = ({navigation, route}) => {
  const [details, setDetails] = useState();
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

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

  const getDirections = async () => {
    Linking.openURL(`https://waze.com/ul?ll=${details.Coordinatey},${details.Coordinatex}&z=10
    `);
  };

  return details ? (
    <>
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
      <Text>כתובת: {details.Full_Adress}</Text>
      <Text>כמות חיסונים שנותרה: 18</Text>
      <Row>
        <Button type="primary" onPress={() => setAppointmentModalOpen(true)}>
          שריין חיסון
        </Button>
        <Button type="secondary" onPress={getDirections}>
          הוראות הגעה
        </Button>
      </Row>
      <Modal
        animationType="slide"
        transparent={true}
        visible={appointmentModalOpen}
        onRequestClose={() => setAppointmentModalOpen(false)}
        onDismiss={() => setAppointmentModalOpen(false)}>
        <ModalParentView>
          <BoxShadow>
            <ModalView>
              <Text bold>קביעת תור</Text>
              <Text>האם ברצונך לשריין חיסון להערב בקופת חולים זו?</Text>
              <Row>
                <Button type="anchor">אשר</Button>
                <Button
                  backgroundColor="#c20000"
                  textColor="#fff"
                  backgroundDarker="#6d0000"
                  onPress={() => setAppointmentModalOpen(false)}>
                  בטל
                </Button>
              </Row>
            </ModalView>
          </BoxShadow>
        </ModalParentView>
      </Modal>
    </>
  ) : null;
};

const Map = styled(MapView)`
  margin: 20px;
  width: ${vw(100) - 40}px;
  height: ${vw(100) - 40}px;
`;

const Text = styled(TEXT)`
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  direction: rtl;
  font-size: 18px;
  align-self: flex-end;
  margin: 10px;
`;

Text.defaultProps = {
  style: {
    writingDirection: 'rtl',
  },
};

const Row = styled(View)`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled(AwesomeButton)`
  align-self: center;
  margin: 5px;
`;

const ModalParentView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: #ffffff80;
`;

const ModalView = styled(View)`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export {CenterScreen};
