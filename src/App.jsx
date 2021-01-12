import React, {useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const App = () => {
  useEffect(() => {
    setTimeout(() => alert('חיסוNET!!!'));
  }, []);

  return (
    <>
      <TitleText>חיסוNET!!!</TitleText>
    </>
  );
};

const TitleText = styled(Text)`
  font-size: 25px;
  color: red;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
