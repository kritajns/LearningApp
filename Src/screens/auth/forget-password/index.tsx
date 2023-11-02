import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Textfield from '../../../components/textfield';
import {VerifiedUser} from '../../../assets/images';
import Button from '../../../components/button';
import HeaderLayout from '../../../components/headerLayout';

interface IProps {
  navigation?: any;
}

const ForgetPassword: React.FC<IProps> = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');

  return (
    <HeaderLayout title="Forgot Password" navigation={navigation}>
      <Image source={VerifiedUser} style={styles.image} />
      <View style={{marginVertical: 20, marginHorizontal: 30}}>
        <Text style={styles.longText}>
          We will send OTP to your email. Please check your email.
        </Text>
      </View>

      <View style={styles.input}>
        <Textfield
          placeHolder="Enter your email"
          value={email}
          label="Email"
          handleChange={(txt: any) => setEmail(txt)}
          leftIconName="email-outline"
        />
      </View>

      <View
        style={{
          width: '90%',
          marginVertical: 20,
          alignSelf: 'center',
        }}>
        <Button
          title="Send"
          onPress={() => {
            console.log('send-=-=-');
            navigation?.navigate('verification');
          }}
        />
      </View>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  arrowIcon: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 10,
  },
  longText: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'grey',
  },
  input: {
    marginHorizontal: 25,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  lastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ForgetPassword;
