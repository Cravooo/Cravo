import React, { useState } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AuthInput from '../../components/Auth/AuthInput/AuthInput';
import AuthSubmitButton from '../../components/Auth/AuthButton/AuthSubmitButton';
import styles from './style';
import { useAuth } from '../../contexts/AuthContext';
import { ScreenProps } from '../../navigation/types';
import AuthService from '../../services/AuthService';

type Props = ScreenProps<'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptsMarketing, setAcceptsMarketing] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !firstName || !lastName) {
      return Alert.alert('Missing fields', 'Please fill in all fields');
    }

    try {
      setLoading(true);
      await AuthService.registerWithEmail(email, password, firstName, lastName, username);
      await login(email, password);
    } catch (error) {
      Alert.alert('Registration failed', 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Welcome to Cravo</Text>
        <Text style={styles.title}>Create your account</Text>

        <AuthInput
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <AuthInput
          placeholder="Last name"
          value={lastName}
          onChangeText={setLastName}
        />
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
        <Text style={styles.passwordHint}>
          Passwords should be between 6 and 16 characters
        </Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={acceptsMarketing}
            onValueChange={setAcceptsMarketing}
            tintColors={{ true: '#purple', false: '#purple' }}
          />
          <Text style={styles.checkboxText}>
            Yes, I want to receive offers and discounts
          </Text>
        </View>

        <AuthSubmitButton
          text="Create your account"
          onPress={handleRegister}
          loading={loading}
        />

        <Text style={styles.disclaimer}>
          By creating an account you agree to the{' '}
          <Text style={styles.link}>privacy policy</Text> and the{' '}
          <Text style={styles.link}>terms of use</Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
          <Text style={styles.registerLink}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
