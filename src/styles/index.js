import { StyleSheet } from 'react-native';
import { white, lightGray } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  nav: {
    paddingTop: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    backgroundColor: white,
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
});
