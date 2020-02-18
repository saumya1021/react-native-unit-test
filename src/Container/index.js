import React from 'react';
import LoginScreen from './Login';
import Welcome from './welcome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Welcome:{
      screen:Welcome
    }
  },
  {
    initialRouteName: 'Login',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);