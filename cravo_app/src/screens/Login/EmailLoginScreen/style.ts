import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'DMSans-Regular',
    marginBottom: 30,
    color: '#000',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  link: {
    color: 'purple',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
  },
});
