/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderLayout from '../../components/headerLayout';
import {SelfLearning} from '../../assets/images';
import {LearningData} from '../../DummyData/DummyData';

interface IProps {}

const RecentLearning: React.FC<IProps> = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.mainContainer}>
      <Image source={SelfLearning} style={styles.image} />
      <View style={{width: '60%', marginHorizontal: 15}}>
        <Text style={{fontSize: 16}}>{item.title}</Text>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text style={{fontSize: 12}}>{item.completion}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '60%',
            }}>
            <Icon name="clock" size={15} />
            <Text style={{fontSize: 12}}>{item.timeRemain}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              styles.button1,
              {
                backgroundColor: item.status === 1 ? 'blue' : 'white',
                borderColor: item.status === 1 ? 'blue' : 'grey',
              },
            ]}>
            <Text style={{color: item.status === 1 ? 'white' : '#000'}}>
              View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button2,
              {
                backgroundColor: item.status === 2 ? 'blue' : 'white',
                borderColor: item.status === 2 ? 'blue' : 'grey',
              },
            ]}>
            <Text style={{color: item.status === 2 ? 'white' : '#000'}}>
              Discuss
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <HeaderLayout title="Recent Learning">
      <FlatList
        data={LearningData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 30,
  },
  image: {
    width: 130,
    height: 115,
    borderRadius: 10,
  },
  line: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    marginVertical: 10,
  },
  button1: {
    width: 105,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    // border
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: 105,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentLearning;
