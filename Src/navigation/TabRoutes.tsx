/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Bookmark, Dashboard, Learning, Profile} from '../screens';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon1 name="home" color={focused ? 'blue' : '#ccc'} size={25} />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'blue' : '#ccc', fontSize: 12}}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon1
              name="bookmark"
              color={focused ? '#000' : '#ccc'}
              size={25}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#ccc', fontSize: 12}}>
              Bookmark
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Learning"
        component={Learning}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon1 name="timer" color={focused ? '#000' : '#ccc'} size={25} />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#000' : '#ccc', fontSize: 12}}>
              Learning
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon1 name="account" color={focused ? 'blue' : '#ccc'} size={30} />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? 'blue' : '#ccc', fontSize: 12}}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
