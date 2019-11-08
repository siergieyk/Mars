import React from 'react';
import {StyleSheet, Button, Text, View, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from './Screens/Index';
import About from './Screens/About';
import Members from './Screens/Members';
import Chapters from './Screens/Chapters';
import WhyMars from './Screens/WhyMars';
import Founding from './Screens/Founding';
import News from './Screens/News';

const RootStack = createStackNavigator(
  {
    Home: Index,
    Members: Members,
    Chapters: Chapters,
    About: About,
    WhyMars: WhyMars,
    Founding: Founding,  
    News: News,
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
