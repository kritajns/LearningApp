import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SelfLearning} from '../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import DetailCard from './container/DetailCard';
import Button from '../../components/button';

interface CProps {}

const DetailData = [
  {
    id: 1,
    title: 'Foundation of User Experience (UX) Design',
    chapter: 4,
    duration: '4hrs 35 min 25sec',
  },
  {
    id: 2,
    title: 'Start the UX Design Process: Empathize, Desifne and Ideate',
    chapter: 4,
    duration: '3hrs 00 min 25sec',
  },
  {
    id: 3,
    title: 'Foundation of User Experience (UX) Design',
    chapter: 4,
    duration: '4hrs 35 min 25sec',
  },
  {
    id: 4,
    title: 'Conduct UX Research and Test Early Concepts',
    chapter: 7,
    duration: '7hrs 55 min 25sec',
  },
  {
    id: 5,
    title: 'Build Dynamic User Interface',
    chapter: 6,
    duration: '6hrs 05 min 15sec',
  },
];

const Course: React.FC<CProps> = ({navigation, route}: any) => {
  const {data} = route.params;
  console.log('testing-itesm-=-=-123', data);
  const detailItem = ({item}: any) => (
    <DetailCard
      title={item.title}
      chapter={item.chapter}
      duration={item.duration}
    />
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={SelfLearning} style={styles.headerImage} />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation?.goBack()}>
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>

        <Text style={{fontSize: 15, fontWeight: 'bold', width: '80%'}}>
          {data.course}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={{color: 'grey'}}>UI/UX Design</Text>
          <Text
            style={{
              color: 'dodgerblue',
              textDecorationLine: data.fee === 'Free' ? 'underline' : null,
            }}>
            {data.fee}
          </Text>
        </View>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
          Description
        </Text>
        <Text style={{color: 'grey', lineHeight: 24}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
          <Text style={{color: 'dodgerblue'}}>More</Text>
        </Text>

        <View>
          <Text style={{marginTop: 20, marginBottom: 15, fontWeight: 'bold'}}>
            Courses
          </Text>
          <FlatList
            data={DetailData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={detailItem}
          />
          <Button title="Start Course" customStyle={{borderRadius: 8}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  headerImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 15,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Course;
