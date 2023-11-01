import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderLayout from '../../../components/headerLayout';
import Button from '../../../components/button';

const Payment = ({navigation}: any) => {
  return (
    <HeaderLayout title="Payment" navigation={navigation}>
      <View style={styles.container}>
        <Text>Credit Card</Text>
        <Text>PayPal</Text>
        <Text>Master Card</Text>

        <Button
          title="Pay Now"
          customStyle={styles.payBtn}
          textStyle={styles.text}
        />
      </View>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  payBtn: {
    backgroundColor: 'dodgerblue',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Payment;
