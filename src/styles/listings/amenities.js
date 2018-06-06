import { StyleSheet } from 'react-native';
import { black } from '../colors';
import { small } from '../fontSizes';

export default StyleSheet.create({
  amenity: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  text: {
    color: black,
    fontSize: small,
    paddingTop: 5,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  section: {
    marginBottom: 4,
  },
});
