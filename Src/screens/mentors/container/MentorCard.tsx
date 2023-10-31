import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {NewUser} from '../../../assets/images';

const MentorCard = ({name, jobTitle}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Image source={NewUser} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={{width: '80%'}}>
            <Text style={styles.jobText}>{jobTitle}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    marginBottom: 15,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  jobText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'grey',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
});

export default MentorCard;
