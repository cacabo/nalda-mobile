import { StyleSheet } from 'react-native';
import { black, darkGray, lightGray } from '../colors';
import { large, medium } from '../fontSizes';

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
  },
  description: {
    fontSize: medium,
    color: darkGray,
    marginBottom: 12,
  },
  image: {
    flex: 1,
    width: null,
    height: 200,
  },
  naldaFavorite: {
    backgroundColor: lightGray,
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
});
