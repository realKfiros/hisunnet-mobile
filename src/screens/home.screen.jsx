import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, TextInput} from 'react-native';
import {Circle} from 'react-native-progress';
import Axios from 'axios';
import styled from 'styled-components';
import * as uuid from 'react-native-uuid';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const performSearch = async () => {
    setLoading(true);
    const request = await Axios.post('/SearchPage/GetSearchPageSearch/', {
      ChapterId: '005',
      InitiatorCode: '001',
      IsMobileApplication: 0,
      ModuleName: 'medicalcentressearchresults',
      PageNumber: '1',
      RequestId: uuid.v1(),
      SearchText: search,
      Source: 'SearchPage',
      isKosher: 0,
    });
    setSearchResults(request.data.Items);
    setLoading(false);
  };

  return (
    <>
      <SearchBox>
        <SearchInput
          placeholder="חיפוש"
          style={{writingDirection: 'rtl'}}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        {search.length > 2 && (
          <SearchButton onPress={performSearch}>
            <Text style={{fontSize: 18}}>חיפוש</Text>
          </SearchButton>
        )}
      </SearchBox>
      {loading ? (
        <Loading size={50} indeterminate={true} />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.ItemKey}
          renderItem={({item}) => (
            <ServiceCenter style={{writingDirection: 'rtl'}}>
              {item.SERVICE_NAME}
            </ServiceCenter>
          )}
        />
      )}
    </>
  );
};

const SearchBox = styled(View)`
  display: flex;
  flex-direction: row-reverse;
  height: 60px;
`;

const SearchInput = styled(TextInput)`
  height: 40px;
  border-radius: 20px;
  background-color: #d1d1d1;
  margin: 5px;
  font-size: 18px;
  padding-right: 15px;
  flex: 1;
`;

const SearchButton = styled(TouchableOpacity)`
  height: 40px;
  /* width: 100px; */
  border-radius: 20px;
  background-color: #d1d1d1;
  margin: 5px;
  font-size: 18px;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
`;

const Loading = styled(Circle)`
  margin: auto;
  margin-top: 50px;
`;

const ServiceCenter = styled(Text)`
  padding: 10px;
  font-size: 18px;
  height: 44px;
  direction: rtl;
`;

export {HomeScreen};
