import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { MainScreen } from '../../screens/mainScreen';
import { DetailsScreen } from '../../screens/detailsScreen';


const DrawerStack = TabNavigator({
  Main: { screen: MainScreen },
  Details: { screen: DetailsScreen },
}, {
  tabBarPosition: 'bottom',
});

export default DrawerStack;

