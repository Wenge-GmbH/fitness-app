import React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import StopWatch from '../assets/icons/stopwatch.png';
import Icon from '../components/icons';

import TimerScreen from '../screens/timerScreen';
import PlanScreen from '../screens/planScreen';


export const TabNavigation = createBottomTabNavigator(
  {
    Timer: {
      screen: TimerScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name={StopWatch}/>
      }
    },
    Plan: {
      screen: PlanScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#f4c242',
      activeBackgroundColor: '#2b2b2b',
      showLabel: false,
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: '#2b2b2b',

      }
    }
  }
)
