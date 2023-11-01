import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookmarkCard = ({imageUrl, course, title, price, rating, study}: any) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={imageUrl} style={styles.image} />
      <View style={{marginLeft: 10, marginTop: 10, width: '65%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'orange', fontWeight: 'bold'}}>{title}</Text>
          <Icon
            name="bookmark-minus"
            size={20}
            color={'green'}
            style={styles.icon}
          />
        </View>
        <Text style={styles.titleText}>{course}</Text>
        <Text style={{color: 'blue', marginBottom: 5}}>{price}</Text>
        <View>
          <Text style={styles.smallText}>
            {rating} | {study} Std
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
  },
  icon: {
    alignSelf: 'flex-end',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  smallText: {
    fontSize: 12,
  },
});

export default BookmarkCard;
