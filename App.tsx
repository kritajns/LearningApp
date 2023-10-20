import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Route from './Src/navigation/Route';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Route />
    </SafeAreaView>
  );
}

export default App;
