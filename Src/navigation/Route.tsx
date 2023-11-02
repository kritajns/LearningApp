import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Course,
  Dashboard,
  ForgetPwd,
  Login,
  Onboarding,
  Premium,
  Profile,
  Register,
  Verification,
} from '../screens';
import TabRoutes from './TabRoutes';
import CategoryScreen from '../screens/category';
import MentorScreen from '../screens/mentors';
import Payment from '../screens/premium/container/Payment';

const Stack = createStackNavigator();

const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="forget-password" component={ForgetPwd} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Mentor" component={MentorScreen} />
        <Stack.Screen name="Premium" component={Premium} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
