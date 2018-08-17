import { StyleSheet } from 'react-native';
import { black, darkGray } from '../colors';
import { large, medium, small } from '../fontSizes';

export default StyleSheet.create({
  title: {
    fontSize: large,
    color: black,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    color: darkGray,
    marginBottom: 4,
    fontSize: medium,
  },
  padBottom: {
    paddingBottom: 6,
  },
  body: {
    fontWeight: 'normal',
    marginBottom: 4,
    fontSize: small,
  },
  quote: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: darkGray,
    fontSize: small,
  },
  gray: {
    color: darkGray,
  },
  black: {
    color: black,
  },
});
