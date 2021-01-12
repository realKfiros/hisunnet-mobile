import React, {useEffect} from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';
import styled from 'styled-components';

const App = () => {
  useEffect(() => {
    setTimeout(() => alert('חיסוNET!!!'), 10000);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <TitleText>חיסוNET!!!</TitleText>
    </SafeAreaView>
  );
};

const TitleText = styled(Text)`
  font-size: 25px;
  color: red;
  margin: auto;
  margin-top: 50px;
`;

export default App;
