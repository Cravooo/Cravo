import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address';
    secureTextEntry?: boolean;
    showToggle?: boolean;
}

interface State {
    showPassword: boolean;
}

export default class AuthInput extends Component<Props, State> {
    state = {
        showPassword: false,
    }

    togglePassword = () => {
        this.setState((prev) => ({ showPassword: !prev.showPassword }));
    };

    render() {
        const { placeholder, value, onChangeText, keyboardType, secureTextEntry, showToggle} = this.props;
        const shouldHide = secureTextEntry && !this.state.showPassword;

        return (
            <View style= {styles.inputContainer}>
                <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={shouldHide} style={styles.input} />
                {showToggle && (
                    <TouchableOpacity onPress={this.togglePassword}>
                        <Text style={styles.toggle}>{this.state.showPassword ? 'Hide' : 'Show'}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}