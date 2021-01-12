import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import Axios from 'axios';
import styled from 'styled-components';

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    performSearch();
  }, []);

  const performSearch = async () => {
    const request = await Axios.post('/SearchPage/GetSearchPageSearch/', {
      ChapterId: '005',
      InitiatorCode: '001',
      IsMobileApplication: 0,
      ModuleName: 'medicalcentressearchresults',
      PageNumber: '1',
      RequestId: 'a4bfaf5e-9e19-806a-53ed-2a557c86ccb8',
      SearchText: 'חיפה',
      Source: 'SearchPage',
      isKosher: 0,
    });
    setSearchResults(request.data);
  };

  return searchResults && searchResults.Items ? (
    <FlatList
      data={searchResults.Items}
      keyExtractor={(item) => item.ItemKey}
      renderItem={({item}) => (
        <ServiceCenter style={{writingDirection: 'rtl'}}>
          {item.SERVICE_NAME}
        </ServiceCenter>
      )}
    />
  ) : null;
};

const ServiceCenter = styled(Text)`
  padding: 10px;
  font-size: 18px;
  height: 44px;
  direction: rtl;
`;

export {HomeScreen};
