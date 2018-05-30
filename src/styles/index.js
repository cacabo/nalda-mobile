import { StyleSheet } from 'react-native';
import {
  white,
  lightGray,
  red,
} from './colors';

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
    paddingBottom: 12,
    backgroundColor: white,
    borderBottomColor: lightGray,
    borderBottomWidth: 1,
  },
  logo: {
    width: 38,
    height: 38,
    paddingTop: 12,
    paddingBottom: 12,
  },
  error: {
    backgroundColor: red,
    padding: 12,
    color: white,
  },
});
