import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/homeScreen';
import PlanScreen from '../screens/planScreen';
import StartScreen from '../screens/startScreen';


export const TabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Plan: {
      screen: PlanScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#f4c242',
      activeBackgroundColor: '#ebebeb',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: '#2b2b2b',

      }
    }
  }
)

export const StartNavigation = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: TabNavigation,
    }
  }
)
