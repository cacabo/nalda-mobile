import { StyleSheet } from 'react-native';
import { black, darkGray } from '../colors';
import { large, medium } from '../fontSizes';

export default StyleSheet.create({
  title: {
    fontSize: large,
    color: black,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    fontSize: medium,
    color: darkGray,
  },
  image: {
    flex: 1,
    width: null,
    height: 200,
  },
});
