import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Textfield from '../../../components/textfield';
import {NewUser} from '../../../assets/images';
import Button from '../../../components/button';

interface RegisterProps {
  navigation?: any;
}

const Register: React.FC<RegisterProps> = ({navigation}: any) => {
  const [user, setUser] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mobileNum, setMobileNum] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <Image source={NewUser} style={styles.image} />
      <Text style={styles.wcText}>Sign Up</Text>
      <Text style={styles.text2}>Please create a new account</Text>

      <View style={styles.input}>
        <Textfield
          placeHolder="Please enter your name"
          value={user}
          label="User Name"
          handleChange={(txt: any) => setUser(txt)}
          leftIconName="username"
        />
        <Textfield
          placeHolder="Please enter your email"
          value={email}
          label="Email"
          handleChange={(txt: any) => setEmail(txt)}
          leftIconName="email-outline"
        />

        <Textfield
          placeHolder="Please create password"
          value={password}
          label="Password"
          handleChange={(txt: any) => setPassword(txt)}
          leftIconName="lock-outline"
        />
        <Textfield
          placeHolder="Enter your mobile number"
          value={mobileNum}
          label="Mobile Number"
          handleChange={(txt: any) => setMobileNum(txt)}
          leftIconName="phone"
        />
      </View>

      <View
        style={{
          width: '90%',
          marginVertical: 20,
          // justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Button title="Sign Up" onPress={() => console.log('Sign up')} />
      </View>

      <View style={styles.lastText}>
        <Text style={styles.text3}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation?.navigate('login')}>
          <Text
            style={[
              styles.text3,
              {color: 'red', textDecorationLine: 'underline'},
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    // width: 100,
    // height: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },
  wcText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  text2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#878787',
    alignSelf: 'center',
    marginBottom: 15,
  },
  input: {
    marginHorizontal: 25,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  innerText: {
    fontSize: 13,
    fontWeight: '300',
  },
  line: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '25%',
    height: '2%',
    // backgroundColor: 'black',
  },
  lastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text3: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default Register;
