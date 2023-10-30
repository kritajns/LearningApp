import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Button from '../../../components/button';
import Textfield from '../../../components/textfield';
import {WelcomeUser} from '../../../assets/images';
import Icon from 'react-native-vector-icons/Ionicons';

interface LoginProps {
  navigation?: any;
}

const Login: React.FC<LoginProps> = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      console.log('login successful');
      // navigation?.navigate('Dashboard');
      navigation?.navigate('TabRoutes');
    } else {
      console.log('login unsuccessful');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={WelcomeUser} style={styles.image} />
      <Text style={styles.wcText}>Welcome Back</Text>
      <Text style={styles.text2}>Please login to your account</Text>

      <View style={styles.input}>
        <Textfield
          placeHolder="Please enter your email"
          value={email}
          label="Email"
          handleChange={(txt: any) => setEmail(txt)}
          leftIconName="email-outline"
          error={'Email is required'}
        />

        <Textfield
          placeHolder="Please enter your password"
          value={password}
          label="Password"
          handleChange={(txt: any) => setPassword(txt)}
          leftIconName="lock-outline"
          error={'Password is required'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.innerText}>Remember Me</Text>
        <TouchableOpacity
          onPress={() => navigation?.navigate('forget-password')}>
          <Text style={[styles.innerText, {color: 'red'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
          marginVertical: 20,
          // justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View style={styles.line} />
        <View>
          <Text style={{fontSize: 16, color: 'grey'}}>Or Login with</Text>
        </View>
        <View style={styles.line} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <Icon
          name="logo-facebook"
          size={30}
          style={{marginHorizontal: 10}}
          color="#3b5998"
          // onPress={handleFacebookLogin}
        />
        <Icon
          name="logo-google"
          size={30}
          style={{marginHorizontal: 10}}
          color="green"
          // onPress={handleFacebookLogin}
        />
        <Icon
          name="logo-linkedin"
          size={30}
          style={{marginHorizontal: 10}}
          color="#3b5998"
          // onPress={handleFacebookLogin}
        />
      </View>

      <View style={styles.lastText}>
        <Text style={styles.text3}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation?.navigate('register')}>
          <Text
            style={[
              styles.text3,
              {color: 'red', textDecorationLine: 'underline'},
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default Login;
