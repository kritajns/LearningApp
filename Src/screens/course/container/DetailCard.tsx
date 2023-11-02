import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailCard = ({title, chapter, duration}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.iconContainer}>
          <Icon
            name="caret-forward-circle-sharp"
            size={25}
            color={'royalblue'}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Chapters: {chapter}</Text>
        <Text style={[styles.text, {marginLeft: 15}]}>
          Duration: {duration}
        </Text>
      </View>
      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns title to the left and icon to the right
    alignItems: 'center',
  },
  titleText: {
    flex: 1, // Allows the title to take up all available space to the left of the icon
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'flex-end', // Aligns the icon to the right
  },
  icon: {},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    fontWeight: '400',
    color: 'grey',
  },
  borderLine: {
    width: '100%',
    borderWidth: 0.7,
    borderColor: 'lightgrey',
    marginVertical: 20,
  },
});

export default DetailCard;
