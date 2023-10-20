import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../../components/button';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wcText}>Welcome to Login</Text>

      <View style={{width: '90%'}}>
        <Button title="Login" onPress={() => console.log('Log in')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wcText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Login;
