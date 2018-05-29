import { StyleSheet } from 'react-native';
import { white, lightGray } from './colors';

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 12,
  },
  nav: {
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
    backgroundColor: white,
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
  error: {
    // TODO
  },
});
