import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
  },
  toggle: {
    color: 'purple',
    fontWeight: '600',
  },
});