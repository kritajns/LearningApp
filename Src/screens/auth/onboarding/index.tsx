import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Logo} from '../../../assets/images';
import Button from '../../../components/button';

interface onboardingProps {
  navigation?: any;
}

const OnBoarding: React.FC<onboardingProps> = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* <Text>This is OnBoarding screen.</Text> */}
      <Image source={Logo} style={styles.logo} />
      <View style={styles.btnContainer}>
        <Button title="Sign Up" onPress={() => console.log('pressed')} />
        <Button
          title="I have an account"
          onPress={() => {
            console.log('I have account');
            navigation?.navigate('login');
          }}
          customStyle={{backgroundColor: 'grey'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
  },
  logo: {
    width: 300,
    height: 300,
  },
  btnContainer: {
    width: '90%',
    // height: 40,
  },
});

export default OnBoarding;
