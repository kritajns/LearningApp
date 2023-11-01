import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {CoursesData} from '../../DummyData/DummyData';
import CourseCard from './container/CourseCard';
import {NewUser, Programming} from '../../assets/images';
import {Image} from 'react-native';

interface IProps {
  navigation?: any;
}

const categoriesData = [
  {
    id: 1,
    name: '3D Design',
  },
  {
    id: 2,
    name: 'UI/UX Design',
  },
  {
    id: 3,
    name: 'Graphic Design',
  },
  {
    id: 4,
    name: 'Web Development',
  },
  {
    id: 5,
    name: 'SEO & Marketing',
  },
  {
    id: 6,
    name: 'Mobile Development',
  },
];

const RecentData = [
  {
    id: 1,
    image: '',
    course: 'UX Design',
    title: 'Conduct UX research and test early concept',
    completed: '5/10',
  },
  {
    id: 2,
    image: '',
    course: 'Cyber security',
    title: 'Tools of Trade: Linux and SQL',
    completed: '4/10',
  },
  {
    id: 3,
    image: '',
    course: 'Web Development',
    title: 'Information Security Fundamentals',
    completed: '6/10',
  },
];

const Dashboard: React.FC<IProps> = ({navigation}) => {
  const [value, setValue] = React.useState('');

  const renderItem = ({item}: any) => (
    <CourseCard
      title={item.course}
      name={item.author}
      price={item.fee}
      rating={item.rating}
      onPress={() => navigation?.navigate('Course')}
    />
  );

  const mentorItem = ({item}: any) => (
    // const fullName = item.name;
    // const firstName = fullName.split(' ');
    <View style={{marginHorizontal: 8}}>
      <Image source={NewUser} style={styles.mentorImage} />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    // <SafeAreaView style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.container1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.mainText}>Hello,</Text>
            <Text style={{fontSize: 18, color: 'white'}}>Good Morning</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="bell-outline" size={30} style={styles.bellIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Icon2
            name="search"
            size={22}
            style={{color: 'lightgrey', marginLeft: 10}}
          />
          <TextInput
            placeholder="Search"
            value={value}
            onChangeText={txt => setValue(txt)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.container1}>
        <View>
          <Text style={styles.text1}>25% OFF*</Text>
          <Text style={styles.text2}>Today's Special</Text>
          <View style={{width: '55%'}}>
            <Text style={styles.text3}>
              Get a discount for Every Course Order only Valid for Today!
            </Text>
          </View>
        </View>
      </View>

      <View style={{alignSelf: 'flex-start', marginHorizontal: 15}}>
        <Text style={styles.courseText}>
          Recommended{' '}
          <Text style={[styles.courseText, {color: 'mediumslateblue'}]}>
            Courses
          </Text>
        </Text>
      </View>

      <FlatList
        data={CoursesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.category}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation?.navigate('Category')}>
          <Text style={styles.text4}>SEE ALL</Text>
          <Icon2 name="arrow-forward-ios" size={18} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={categoriesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => (
          <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal={true}
      />

      <Text style={styles.recentText}>Recent Learning</Text>
      <FlatList
        data={RecentData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <Image source={Programming} style={styles.image} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                marginVertical: 8,
                paddingHorizontal: 5,
              }}>
              {item.course}
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '300', paddingHorizontal: 5}}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginVertical: 10,
              }}>
              <View style={styles.horizontalLine} />
              <Text style={{fontSize: 13, color: 'grey', marginLeft: 10}}>
                {item.completed}
              </Text>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.category}>
        <Text style={styles.headerText}>Top Mentor</Text>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation?.navigate('Mentor')}>
          <Text style={styles.text4}>SEE ALL</Text>
          <Icon2 name="arrow-forward-ios" size={18} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={CoursesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={mentorItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: '95%',
    backgroundColor: 'royalblue',
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    color: 'white',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginTop: 15,
    backgroundColor: 'white',
  },
  input: {
    marginLeft: 15,
    fontSize: 15,
  },
  text1: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  text2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  text3: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  courseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginVertical: 15,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: '#000',
  },
  text4: {
    fontSize: 13,
    fontWeight: '500',
    color: 'blue',
  },
  arrowIcon: {
    color: 'blue',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'grey',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  recentText: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  mentorImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContainer: {
    width: 220,
    marginLeft: 15,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  horizontalLine: {
    borderWidth: 2,
    borderColor: 'royalblue',
    borderRadius: 20,
    width: '80%',
  },
});

export default Dashboard;
