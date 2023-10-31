/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import HeaderLayout from '../../components/headerLayout';
import {LearningData} from '../../DummyData/DummyData';
import LearningCard from './container/LearningCard';

interface IProps {
  navigation?: any;
}

const RecentLearning: React.FC<IProps> = ({navigation}) => {
  const renderItem = ({item}: any) => (
    <LearningCard
      title={item.title}
      completion={item.completion}
      time={item.timeRemain}
      status={item.status}
    />
  );
  return (
    <HeaderLayout title="Recent Learning" navigation={navigation}>
      <FlatList
        data={LearningData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </HeaderLayout>
  );
};

export default RecentLearning;
