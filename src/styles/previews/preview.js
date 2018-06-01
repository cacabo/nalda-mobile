import { StyleSheet } from 'react-native';
import { darkGray } from '../colors';
import { small, medium } from '../fontSizes';

export default StyleSheet.create({
  preview: {
    marginBottom: 16,
  },
  image: {
    marginBottom: 8,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    // width: null,
    // height: null,
    width: 50,
    height: 50,
    flex: 1,
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
