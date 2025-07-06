import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import LoginButton from '../../../components/LoginButton';
import { ScreenProps } from '../../../navigation/types';
import styles from './styles';

type Props = ScreenProps<'Login'>;

export default function LoginScreen({navigation} : Props) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../../assets/images/logo/cravo_logo.png')} style={styles.logo} />
            <Text style={styles.tagline}>Swipe. Watch. Eat.</Text>
        </View>

        <Image source={require('../../../assets/images/main_menu/main_menu_bg.png')} style={styles.foodImage} resizeMode="contain" />

        <View style={styles.loginArea}>
            <Text style={styles.title}>Log in or create an account</Text>
            <Text style={styles.description}>
            Receive rewards and save your details for a faster checkout experience.
            </Text>

            <LoginButton
            icon={require('../../../assets/images/google.png')}
            text="Continue with Google"
            onPress={() => {}}
            />
            <LoginButton
            icon={require('../../../assets/images/facebook.png')}
            text="Continue with Facebook"
            onPress={() => {}}
            />
            <LoginButton
            icon={require('../../../assets/images/apple.png')}
            text="Continue with Apple"
            onPress={() => {}}
            />
            <LoginButton
            icon={require('../../../assets/images/email.jpg')}
            text="Continue with email"
            onPress={() => navigation.navigate('EmailLogin')}
            />
        </View>
    </ScrollView>
    );
}