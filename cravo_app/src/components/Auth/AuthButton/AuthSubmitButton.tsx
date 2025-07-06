import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './style';

interface Props {
    text: string;
    onPress: () => void;
    loading?: boolean;
}

export default function AuthSubmitButton({ text, onPress, loading = false }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )
}