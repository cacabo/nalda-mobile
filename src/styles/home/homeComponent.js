import { StyleSheet } from 'react-native';
import { largest, medium } from '../fontSizes';

export default StyleSheet.create({
  title: {
    fontSize: largest,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: medium,
    marginBottom: 16,
  },
  container: {
    marginBottom: 32,
  },
});
