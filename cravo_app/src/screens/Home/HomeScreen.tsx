import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import AuthInput from '../../components/Auth/AuthInput/AuthInput';
import AuthSubmitButton from '../../components/Auth/AuthButton/AuthSubmitButton';
import { useAuth } from '../../contexts/AuthContext';

const HomeScreen: React.FC = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Missing credentials');
    }

    try {
      setLoading(true);
      await login(email, password);
    } catch (error) {
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <AuthInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        showToggle
      />
      <AuthSubmitButton
        text="Log in"
        onPress={handleLogin}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
