import {Dimensions} from 'react-native';

const vh = (percentage) => Dimensions.get('screen').height * (percentage / 100);
const vw = (percentage) => Dimensions.get('screen').width * (percentage / 100);

export {vh, vw};
