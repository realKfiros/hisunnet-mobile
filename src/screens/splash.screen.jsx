import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  const [firebaseUser, setFirebaseUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    init();
  }, [firebaseUser]);

  const onAuthStateChanged = (user) => {
    setFirebaseUser(user);
  };

  const init = async () => {
    if (firebaseUser) {
      let name = await AsyncStorage.getItem('name');
      if (typeof name === 'string') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Registration');
      }
    } else {
      navigation.navigate('Onboarding');
    }
  };

  return <></>;
};

export {SplashScreen};
