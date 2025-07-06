import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

import LoginScreen from '../screens/Login/LoginScreen/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen.tsx';
import EmailLoginScreen from '../screens/Login/EmailLoginScreen/EmailLoginScreen.tsx';
import RegisterScreen from '../screens/Register/RegisterScreen.tsx';

import { RootStackParamList } from './types';
import ForgotPasswordScreen from '../screens/Login/ForgotPassword/ForgotPasswordScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailLogin"
          component={EmailLoginScreen}
          options={{
            headerTitle: '',
            headerBackVisible: true,
          }}
        />
        
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: '',
            headerBackVisible: true,
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: '',
            headerBackVisible: true,
          }}
        />

        </>
      )}
    </Stack.Navigator>
  );
}
