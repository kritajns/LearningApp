import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderLayout from '../../components/headerLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/button';
import Payment from './container/Payment';

interface IProps {}

const Premium: React.FC<IProps> = ({navigation}: any) => {
  return (
    <HeaderLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Get Educated Live Premium</Text>
        <View style={styles.iconContainer}>
          <Icon name="bookmark" size={35} color={'dodgerblue'} />
        </View>
        <Text style={{fontSize: 16, fontWeight: '600', marginVertical: 15}}>
          Free Access All Course
        </Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.container2}>
          <View style={[styles.cardContainer, {marginRight: 15}]}>
            <View style={styles.header}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Monthly
              </Text>
            </View>
            <Text style={styles.priceText}>$130</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.header}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Popular
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 15,
              }}>
              Yearly
            </Text>
            <Text style={styles.priceText}>$530</Text>
          </View>
        </View>

        <Button
          title="Go Premium"
          customStyle={styles.btn}
          onPress={() => navigation?.navigate('Payment')}
        />
        <Button
          title="Cancel"
          customStyle={styles.btnCancel}
          textStyle={styles.text}
          onPress={() => navigation?.goBack()}
        />
      </View>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'dodgerblue',
    marginTop: 15,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  para: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
    marginHorizontal: 20,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardContainer: {
    width: '45%',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 10,
  },
  header: {
    backgroundColor: 'dodgerblue',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    padding: '30%',
    borderRadius: 8,
  },
  btnCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '35%',
    borderRadius: 8,
  },
  text: {
    color: 'dodgerblue',
    fontWeight: '500',
  },
});

export default Premium;
