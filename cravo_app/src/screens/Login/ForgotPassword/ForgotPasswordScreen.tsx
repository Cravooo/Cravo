import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import styles from './style';
import AuthSubmitButton from '../../../components/Auth/AuthButton/AuthSubmitButton';
import { ScreenProps } from '../../../navigation/types';

type Props = ScreenProps<'ForgotPassword'>;

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      return Alert.alert('Please enter your email');
    }

    try {
      setLoading(true);
      Alert.alert('Reset link sent', `Check your email: ${email}`);
    } catch (error) {
      Alert.alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot password</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <AuthSubmitButton
        text="Reset your password"
        onPress={handleReset}
        loading={loading}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
