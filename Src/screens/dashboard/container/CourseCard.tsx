import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SelfLearning} from '../../../assets/images';

const CourseCard = ({title, name, price, rating, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Image source={SelfLearning} style={styles.image} />
      <View style={{width: '100%'}}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 3,
          }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={{alignSelf: 'flex-end'}}>{rating}</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // width: '100%',
    marginLeft: 15,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  name: {
    fontSize: 12,
    color: 'grey',
  },
  priceText: {
    fontSize: 12,
    fontFamily: '600',
    color: 'blue',
  },
});

export default CourseCard;
