import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#ff5a00',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'DMSans-Bold',
  },
});
