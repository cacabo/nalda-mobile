import { StyleSheet } from 'react-native';
import { black } from '../colors';
import { large, small } from '../fontSizes';

export default StyleSheet.create({
  title: {
    fontSize: large,
    color: black,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: small,
  },
  body: {
    fontWeight: 'normal',
    marginBottom: 4,
    fontSize: small,
  },
  quote: {
    fontWeight: 'normal',
    marginBottom: 4,
    fontSize: small, // TODO
  },
});
