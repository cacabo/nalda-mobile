import { StyleSheet } from 'react-native';
import { darkGray, lightGray, lighterGray } from '../colors';
import { medium } from '../fontSizes';

export default StyleSheet.create({
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
  table: {
    borderWidth: 1,
    borderColor: lightGray,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: lightGray,
  },
  rowColored: {
    backgroundColor: lighterGray,
  },
  col: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
