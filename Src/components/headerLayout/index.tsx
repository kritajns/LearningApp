import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  children: React.ReactNode;
  title?: string;
  navigation?: any;
}

const HeaderLayout: React.FC<IProps> = ({children, title, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.arrowIcon}
        onPress={() => navigation?.goBack()}>
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>
      <View style={styles?.childrenContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    // marginLeft: 80,
  },
  arrowIcon: {
    position: 'absolute',
    margin: 10,
  },
  childrenContainer: {},
});

export default HeaderLayout;
