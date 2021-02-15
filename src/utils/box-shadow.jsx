import {View, Platform} from 'react-native';
import styled from 'styled-components';

const BoxShadow = styled(View)`
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

BoxShadow.defaultProps = {
  style: Platform.OS === 'android' && {
    shadowColor: '#0000',
    shadowOpacity: 1,
    elevation: 0.4,
    backgroundColor: '#0000',
  },
};

export {BoxShadow};
