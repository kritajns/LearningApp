import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Champion, sampleUser} from '../../assets/images';
import TouchTab from './container/TouchTab';

interface ProfileProps {
  navigation?: any;
}

const Profile: React.FC<ProfileProps> = ({navigation}: any) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon1 name="arrow-left" size={30} />
        <TouchableOpacity onPress={() => navigation?.navigate('login')}>
          <Icon1 name="logout" size={30} style={{color: 'red'}} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={sampleUser} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ruby Watson</Text>
          <Text style={{marginTop: 3}}>@ruby.watson123</Text>
        </View>
      </View>

      <TouchTab
        activeTab={activeTab}
        onPress1={() => setActiveTab(0)}
        onPress2={() => setActiveTab(1)}
      />

      {activeTab === 0 && (
        <>
          <View style={styles.listContainer}>
            <View style={styles.innerList}>
              <View style={styles.icons}>
                <Icon1 name="account" size={20} style={styles.icon} />
              </View>
              <View style={styles.innerText}>
                <Text style={styles.text1}>Name</Text>
                <Text style={styles.text2}>Ruby Watson</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginRight: 10}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.innerList}>
              <View style={styles.icons}>
                <Icon1 name="email" size={20} style={styles.icon} />
              </View>
              <View style={styles.innerText}>
                <Text style={styles.text1}>Email</Text>
                <Text style={styles.text2}>watsonruby@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginRight: 10}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.innerList}>
              <View style={styles.icons}>
                <Icon1 name="phone" size={20} style={styles.icon} />
              </View>
              <View style={styles.innerText}>
                <Text style={styles.text1}>Phone Number</Text>
                <Text style={styles.text2}>(684) 555-0102</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginRight: 10}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.innerList}>
              <View style={styles.icons}>
                <Icon1 name="lock" size={20} style={styles.icon} />
              </View>
              <View style={styles.innerText}>
                <Text style={styles.text1}>Password</Text>
                <Text style={styles.text2}>Tap to Change Password</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginRight: 10}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.innerList}>
              <View style={styles.icons}>
                <Icon1 name="shield-alert" size={20} style={styles.icon} />
              </View>
              <View style={styles.innerText}>
                <Text style={styles.text1}>Privacy Policy</Text>
                <Text style={styles.text2}>Tap to see Privacy Policy</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginRight: 10}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {activeTab === 1 && (
        <>
          <View style={styles.listContainer2}>
            <Image source={Champion} style={styles.championIcon} />
            <View style={{marginLeft: 20, marginBottom: 10}}>
              <Text style={styles.text1}>Good Listener</Text>
              <Text style={[styles.text2, {marginTop: 10}]}>
                Listens very well.
              </Text>
            </View>
          </View>

          <View style={styles.listContainer2}>
            <Image source={Champion} style={styles.championIcon} />
            <View style={{marginLeft: 20, marginBottom: 10}}>
              <Text style={styles.text1}>Focused</Text>
              <Text style={[styles.text2, {marginTop: 10}]}>
                Listens very well.
              </Text>
            </View>
          </View>

          <View style={styles.listContainer2}>
            <Image source={Champion} style={styles.championIcon} />
            <View style={{marginLeft: 20, marginBottom: 10}}>
              <Text style={styles.text1}>Focused</Text>
              <Text style={[styles.text2, {marginTop: 10}]}>
                Listens very well.
              </Text>
            </View>
          </View>

          <View style={styles.listContainer2}>
            <Image source={Champion} style={styles.championIcon} />
            <View style={{marginLeft: 20, marginBottom: 10}}>
              <Text style={styles.text1}>Focused</Text>
              <Text style={[styles.text2, {marginTop: 10}]}>
                Listens very well.
              </Text>
            </View>
          </View>
        </>
      )}

      <View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.bottomText}>Become Premium</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // position: 'absolute',
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  innerList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icons: {
    borderRadius: 50,
  },
  icon: {
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 50,
  },
  innerText: {
    marginLeft: 20,
  },
  text1: {
    fontSize: 14,
    fontWeight: '500',
  },
  text2: {
    fontWeight: '300',
    fontSize: 12,
  },
  editText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
  },
  bottomText: {
    fontSize: 15,
    color: 'skyblue',

    alignSelf: 'center',
  },
  btnContainer: {
    width: '50%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  championIcon: {
    width: 30,
    height: 30,
  },
  listContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    marginTop: 20,
  },
});

export default Profile;
