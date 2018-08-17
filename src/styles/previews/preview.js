import { StyleSheet } from 'react-native';
import { darkGray } from '../colors';
import { small, medium } from '../fontSizes';

export default StyleSheet.create({
  preview: {
    marginBottom: 24,
  },
  image: {
    marginBottom: 8,
    flex: 1,
    width: null,
    height: 120,
  },
  title: {
    fontWeight: 'bold',
    fontSize: medium,
    marginBottom: 8,
  },
  subtitle: {
    color: darkGray,
    fontSize: small,
  },
  previewsContainer: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
  },
  previewWrapper: {
    flex: 1,
  },
  spacer: {
    width: 6,
    height: 6,
  },
});
