import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type Props = {
    icon: ImageSourcePropType;
    text: string;
    onPress: () => void;
}

export default class Loginbutton extends Component<Props> {
    render() {
        const { icon, text, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});