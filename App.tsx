import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Route from './Src/navigation/Route';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>THis is news</Text>
        <Route />
      </View>
    </SafeAreaView>
  );
}

export default App;
