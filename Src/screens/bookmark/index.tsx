import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BookmarkCard from './container/BookmarkCard';
import HeaderLayout from '../../components/headerLayout';
import {BookmarkData} from '../../DummyData/DummyData';

interface IProps {}

const testData = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Graphic Design',
  },
  {
    id: 3,
    title: '3D Design',
  },
  {
    id: 4,
    title: 'Web Development',
  },
  {
    id: 5,
    title: 'UI/UX',
  },
];

const Bookmark: React.FC<IProps> = ({navigation}: any) => {
  const [selectedItem, setSelectedItem] = React.useState<any>(testData[0].id);

  const bookmarkItem = ({item}: any) => (
    <BookmarkCard
      imageUrl={item.imageUrl}
      title={item.title}
      course={item.course}
      price={item.price}
      rating={item.rating}
      study={item.hour}
    />
  );
  return (
    <HeaderLayout title="My Bookmark" navigation={navigation}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {testData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedItem(item)}>
              <View
                style={[
                  styles.container,
                  {
                    backgroundColor:
                      selectedItem === item.id ? 'green' : 'lightblue',
                  },
                ]}>
                <Text
                  style={{
                    color: selectedItem === item.id ? 'white' : 'black',
                    fontWeight: '600',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={BookmarkData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={bookmarkItem}
      />
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 25,
    margin: 5,
    marginBottom: 20,
  },
});

export default Bookmark;
