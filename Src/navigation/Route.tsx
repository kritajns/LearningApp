import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Dashboard,
  ForgetPwd,
  Login,
  Onboarding,
  Profile,
  Register,
} from '../screens';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="forget-password" component={ForgetPwd} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
