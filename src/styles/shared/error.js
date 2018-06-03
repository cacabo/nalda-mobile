import { StyleSheet } from 'react-native';
import { white, red } from '../colors';
import { small } from '../fontSizes';

export default StyleSheet.create({
  error: {
    backgroundColor: red,
    padding: 12,
    marginBottom: 16,
  },
  text: {
    color: white,
    fontSize: small,
  },
});
