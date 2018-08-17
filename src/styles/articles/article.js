import { StyleSheet } from 'react-native';

import { darkGray } from '../colors';

export default StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: 200,
  },
  quote: {
    flex: 1,
    borderLeftWidth: 1,
    paddingLeft: 4,
    borderLeftColor: darkGray,
  },
  paragraphWrapper: {
    marginBottom: 4,
  },
  header: {
    marginTop: 6,
    marginBottom: 4,
  },
  imageWrapper: {
    marginBottom: 4,
  },
});
