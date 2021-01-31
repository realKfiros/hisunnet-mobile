import React from 'react';
import {SafeAreaView} from 'react-native';

const Screen = ({children}) => (
  <>
    <SafeAreaView />
    {children}
  </>
);

export {Screen};
