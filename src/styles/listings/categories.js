import { StyleSheet } from 'react-native';
import { black, lightGray } from '../colors';
import { small, smallest } from '../fontSizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    backgroundColor: lightGray,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 8,
    marginBottom: 8,
    fontSize: small,
    color: black,
  },
  categorySmall: {
    fontSize: smallest,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 6,
    marginBottom: 6,
  },
});
