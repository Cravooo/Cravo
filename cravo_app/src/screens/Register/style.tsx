import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  topContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  passwordHint: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  disclaimer: {
    fontSize: 12,
    color: '#444',
    marginTop: 20,
  },
  link: {
    color: '#purple',
    textDecorationLine: 'underline',
  },
  registerLink: {
    marginTop: 20,
    fontSize: 14,
    color: '#007bff',
    textAlign: 'center',
    width: '100%',
  },
});
