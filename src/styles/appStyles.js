import { StyleSheet } from 'react-native';
import { white, red } from './colors';

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
  error: {
    backgroundColor: red,
    padding: 12,
    color: white,
  },
});
