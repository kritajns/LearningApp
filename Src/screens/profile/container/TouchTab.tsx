import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TabProps {
  activeTab?: number;
  onPress1: () => void;
  onPress2: () => void;
}

const TouchTab: React.FC<TabProps> = ({activeTab, onPress1, onPress2}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress1}
        style={[
          styles.btnContainer,
          {
            backgroundColor: activeTab === 0 ? 'blue' : 'white',
            marginRight: 10,
          },
        ]}>
        <Text
          style={[
            styles.textContainer,
            {color: activeTab === 0 ? 'white' : 'grey'},
          ]}>
          General
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress2}
        style={[
          styles.btnContainer,
          {backgroundColor: activeTab === 1 ? 'blue' : 'white'},
        ]}>
        <Text
          style={[
            styles.textContainer,
            {color: activeTab === 1 ? 'white' : 'grey'},
          ]}>
          Badges
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnContainer: {
    padding: 10,
    borderRadius: 5,
    width: 170,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
  textContainer: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default TouchTab;
