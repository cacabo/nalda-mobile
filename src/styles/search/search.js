import { StyleSheet } from 'react-native';
import { black, gray } from '../colors';

export default StyleSheet.create({
  input: {
    flex: 1,
    borderColor: gray,
    shadowColor: black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 8,
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});
