import { StyleSheet } from 'react-native';
import { darkGray } from '../colors';
import { small, medium } from '../fontSizes';

export default StyleSheet.create({
  preview: {
    marginBottom: 16,
  },
  image: {
    marginBottom: 8,
    flex: 1,
    width: null,
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    fontSize: medium,
  },
  subtitle: {
    color: darkGray,
    fontSize: small,
  },
});
