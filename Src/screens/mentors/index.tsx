import {View, FlatList} from 'react-native';
import React from 'react';
import HeaderLayout from '../../components/headerLayout';
import {MentorData} from '../../DummyData/DummyData';
import MentorCard from './container/MentorCard';

interface MProps {
  navigation?: any;
}

const MentorScreen: React.FC<MProps> = ({navigation}) => {
  const renderItem = ({item}: any) => (
    <MentorCard name={item.name} jobTitle={item.job} />
  );
  return (
    <HeaderLayout title="Top Mentors" navigation={navigation}>
      <View>
        <FlatList
          data={MentorData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </HeaderLayout>
  );
};

export default MentorScreen;
