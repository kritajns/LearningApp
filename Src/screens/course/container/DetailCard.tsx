import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailCard = ({title, chapter, duration}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text>{title}</Text>
        <View>
          <Icon name="video-player" size={20} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text>Chapters: {chapter}</Text>
        <Text>Duration: {duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
  },
  headerContainer: {},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default DetailCard;
