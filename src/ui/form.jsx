import React from 'react';
import {View} from 'react-native';
import {Provider, TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import styled, {css} from 'styled-components';

const Form = ({children}) => <Provider>{children}</Provider>;

const FormField = css`
  margin: 15px 30px;
`;

const Input = styled(TextInput)`
  ${FormField}
`;

const Field = styled(View)`
  ${FormField}
`;

const Dropdown = styled(DropDown)`
  ${FormField}
`;

export {Form, Input, Field, Dropdown};
