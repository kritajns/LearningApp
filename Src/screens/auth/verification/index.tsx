import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderLayout from '../../../components/headerLayout';
import {VerifiedUser} from '../../../assets/images';
import Button from '../../../components/button';

interface IProps {}

const Verification: React.FC<IProps> = ({navigation}: any) => {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [num3, setNum3] = React.useState('');
  const [num4, setNum4] = React.useState('');
  return (
    <HeaderLayout title="Verification" navigation={navigation}>
      <Image source={VerifiedUser} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.mainText}>Enter Verification Code</Text>
        <Text style={styles.para}>
          We sent a OTP verification code to your email ending with
          (*********@gmail.com)
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={num1}
          onChangeText={num => setNum1(num)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          value={num2}
          onChangeText={num => setNum2(num)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          value={num3}
          onChangeText={num => setNum3(num)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          value={num4}
          onChangeText={num => setNum4(num)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={styles.codeText}>If you didn't receive a code!</Text>
        <TouchableOpacity>
          <Text style={styles.resend}>Resend</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Verify"
        customStyle={styles.btn}
        onPress={() => console.log('Code verified')}
      />
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: 15,
  },
  para: {
    width: '60%',
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 30,
  },
  resend: {
    color: 'red',
    marginLeft: 5,
  },
  codeText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
  inputContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    padding: 15,
  },
  input: {
    width: 50,
    height: 55,
    borderRadius: 30,
    backgroundColor: 'darkgrey',
    marginRight: 20,
    padding: 15,
    alignSelf: 'center',
    fontSize: 18,
  },
  btn: {
    marginHorizontal: 30,
    borderRadius: 8,
  },
});

export default Verification;
