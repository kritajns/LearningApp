import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  customStyle?: any;
}

const Button: React.FC<ButtonProps> = ({title, onPress, customStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, customStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 15,
    backgroundColor: 'blue',
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default React.memo(Button);
