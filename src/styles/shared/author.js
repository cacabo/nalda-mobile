import { StyleSheet } from 'react-native';
import { small, smallest } from '../fontSizes';
import { darkGray } from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  text: {
    fontSize: small,
    color: darkGray,
    fontWeight: 'bold',
    marginBottom: 4,
    paddingTop: 6,
  },
  timestamp: {
    color: darkGray,
    fontSize: smallest,
  },
});
