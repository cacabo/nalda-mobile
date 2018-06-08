import { StyleSheet } from 'react-native';
import { largest, medium } from '../fontSizes';
import { darkGray, lightGray } from '../colors';

export default StyleSheet.create({
  title: {
    fontSize: largest,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: medium,
    marginBottom: 16,
  },
  container: {
    marginBottom: 32,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  category: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: lightGray,
    borderRadius: 4,
    margin: 4,
  },
  categoryText: {
    fontSize: medium,
    color: darkGray,
  },
});
