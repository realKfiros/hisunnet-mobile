import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, TextInput} from 'react-native';
import {Circle} from 'react-native-progress';
import Axios from 'axios';
import styled from 'styled-components';
import * as uuid from 'react-native-uuid';
import {MedicalCenterItem} from '../components/MedicalCenter.item';
import {vw} from '../utils/css';
import {ListFooter} from '../utils/list-footer';
import {Screen} from '../ui/screen';

const HomeScreen = ({navigation}) => {
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
    <Screen>
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
        <MedicalCentersList
          data={searchResults}
          keyExtractor={(item) => item.ItemKey}
          renderItem={({item}) => (
            <MedicalCenterItem
              item={item}
              onPress={() => navigation.push('Center', {center: item})}
            />
          )}
          ListFooterComponent={<ListFooter height={15} />}
        />
      )}
    </Screen>
  );
};

const TopSection = styled(View)``;

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

const MedicalCentersList = styled(FlatList)`
  padding: 20px;
  padding-bottom: 0;
  width: ${vw(100)}px;
  margin-bottom: 20px;
`;

export {HomeScreen};
