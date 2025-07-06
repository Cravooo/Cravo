import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 14,
    marginTop: 6,
    color: '#555',
  },
  foodImage: {
    width: '100%',
    height: 180,
    marginVertical: 16,
  },
  loginArea: {
    alignItems: 'stretch',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
});
