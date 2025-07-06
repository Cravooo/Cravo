import React, { useState } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../../../components/Auth/AuthInput/AuthInput';
import AuthSubmitButton from '../../../components/Auth/AuthButton/AuthSubmitButton';
import styles from './style';
import { useAuth } from '../../../contexts/AuthContext';
import { ScreenProps } from '../../../navigation/types';

type Props = ScreenProps<'EmailLogin'>;

const EmailLoginScreen: React.FC<Props> = ({ navigation }) => {
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
      <Text style={styles.title}>Continue with email</Text>

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

      <View style={styles.linkRow}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailLoginScreen;
