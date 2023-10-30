import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

const Dashboard: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to my Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
