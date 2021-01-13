import {View} from 'react-native';
import styled from 'styled-components';
import {vw} from './css';

const ListFooter = styled(View)`
  width: ${vw(100)}px;
  height: ${(props) => props.height}px;
`;

export {ListFooter};
