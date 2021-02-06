import React from 'react';
import {Platform, SafeAreaView} from 'react-native';

const Screen = ({children, light}) => (
  <>
    <SafeAreaView
      style={{
        backgroundColor: light && '#0D47A1',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      }}
    />
    {children}
  </>
);

export {Screen};
