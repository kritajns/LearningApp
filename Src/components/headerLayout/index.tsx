import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  children: React.ReactNode;
  title?: string;
  navigation?: any;
}

const HeaderLayout: React.FC<IProps> = ({children, title, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
      <View style={styles?.childrenContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 80,
  },
  childrenContainer: {},
});

export default HeaderLayout;
