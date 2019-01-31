import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import Gallery from '../screens/Gallery'
import About from '../screens/About'
import Contact from '../screens/Contact'

export default createAppContainer(createDrawerNavigator({
  Home: HomeScreen,
  Gallery: {
    screen: Gallery
  },
  About: {
    screen: About
  },
  Contact: {
    screen: Contact
  }
},
  {
    drawerWidth: 90,
    drawerBackgroundColor: 'rgba(250,249,249,0.9)',
    color: 'red'
  }));
