import React from 'react';
import {View, Text, StyleSheet, KeyboardTypeOptions} from 'react-native';
import {TextInput} from 'react-native-paper';

interface TextBoxProps {
  value?: string;
  label?: string;
  touched?: any;
  leftIconName?: string;
  onPress?: () => void;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  customStyle?: any;
  onBlur?: any;
  handleChange: (val: string) => void;
  placeHolder?: string;
  error?: any;
}

const TextBox: React.FC<TextBoxProps> = ({
  value,
  label,
  touched,
  leftIconName,
  // onPress,
  keyboardType,
  editable,
  onBlur,
  handleChange,
  placeHolder,
  error,
  customStyle,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.inputContainer, styles.textBox, customStyle]}
        placeholder={placeHolder}
        label={label}
        mode="outlined"
        keyboardType={keyboardType ?? 'default'}
        left={
          leftIconName ? (
            <TextInput.Icon icon={leftIconName} style={{alignSelf: 'center'}} />
          ) : null
        }
        onChangeText={handleChange}
        value={value}
        onBlur={onBlur}
        editable={editable}
      />
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 20,
    marginVertical: 10,
  },
  textBox: {},
  errorText: {
    fontSize: 12,
    color: '#f22004',
    marginBottom: 10,
  },
});

export default React.memo(TextBox);
