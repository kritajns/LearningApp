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

const TextField: React.FC<TextBoxProps> = ({
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
    <View style={styles.mainContainer}>
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
  mainContainer: {
    borderRadius: 50,
  },
  inputContainer: {
    // flex: 1,
    // width: '100%',
    // borderRadius: 50,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  textBox: {},
  errorText: {
    fontSize: 12,
    color: '#f22004',
    marginBottom: 10,
  },
});

export default React.memo(TextField);
