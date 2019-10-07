import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GroceriesScreen from '../screens/GroceriesScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const GroceriesStack = createStackNavigator(
  {
    Groceries: GroceriesScreen,
  },
  config
);

GroceriesStack.navigationOptions = {
  tabBarLabel: 'Groceries',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? "ios-cart"
          : 'md-cart'
      }
    />
  ),
};

GroceriesStack.path = '';

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
  },
  config
);

MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'} />
  ),
};

MenuStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  GroceriesStack,
  MenuStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
