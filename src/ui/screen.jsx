import React from 'react';
import {SafeAreaView} from 'react-native';

const Screen = ({children, light}) => (
  <>
    <SafeAreaView style={{backgroundColor: light && '#0D47A1'}} />
    {children}
  </>
);

export {Screen};
