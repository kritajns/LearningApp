import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderLayout from '../../components/headerLayout';
import {useNavigation} from '@react-navigation/native';

interface IProps {}

const CategoryScreen: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <HeaderLayout title="All Category" navigation={navigation}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          value={searchValue}
          onChangeText={(txt: any) => setSearchValue(txt)}
          style={styles.inputText}
          editable
        />
        <View style={styles.iconContainer}>
          <Icon name="search" size={20} style={styles.searchIcon} />
        </View>
      </View>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'royalblue',
  },
  inputText: {
    fontSize: 15,
    marginLeft: 10,
  },
  searchIcon: {
    color: 'white',
  },
});

export default CategoryScreen;
