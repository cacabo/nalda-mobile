import { StyleSheet } from 'react-native';
import { black, darkGray, lightGray, lighterGray } from '../colors';
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
  table: {
    borderWidth: 1,
    borderColor: lightGray,
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
