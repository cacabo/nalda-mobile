import { StyleSheet } from 'react-native';
import { darkGray } from '../colors';
import { large, medium } from '../fontSizes';

export default StyleSheet.create({
  preview: {
    marginBottom: 24,
  },
  image: {
    marginBottom: 8,
    flex: 1,
    width: null,
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    fontSize: large,
    marginBottom: 8,
  },
  subtitle: {
    color: darkGray,
    fontSize: medium,
  },
});
