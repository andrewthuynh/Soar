import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 * - DashboardTabNavigator
 *    - Tab 1 - FeedStack
 *    - Tab 2 - ProfileStack
 *    - Tab 3 - SettingsStack
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import LocationDetailScreen from './screens/LocationDetailScreen';
import NewEventScreen  from './screens/NewEventScreen';
import SearchScreen from './screens/SearchScreen';
import EventsScreen from './screens/EventsScreen';
import { Ionicons } from '@expo/vector-icons';

class AppNav extends Component {

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
export default AppNav;

const Detail = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detail</Text>
  </View>
);

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        headerStyle: {height: 40}
      };
    }
  },
  LocationDetail: {
    screen: LocationDetailScreen
  },
});

const EventsStack = createStackNavigator({
  Events: {
    screen: EventsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Events',
        headerStyle: {height: 40}
      };
    }
  },
  NewEvent: {
    screen: NewEventScreen
  },
  Search: {
    screen: SearchScreen
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerStyle: {height: 40}
      };
    }
  },
  Detail: {
    screen: Detail
  },
  Search: {
    screen: SearchScreen
  }
});
const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerStyle: {height: 40}
      };
    }
  }
});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
  }else if (routeName === 'Events') {
    iconName = `ios-boat`;
  } else if (routeName === 'Profile') {
    iconName = `ios-body`;
  } else if (routeName === 'Settings') {
    iconName = `ios-settings`;
  } 

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: EventsStack,
    Profile: ProfileStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        header: null,
        headerTitle: routeName,
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      };
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: '#505050',
      safeAreaInset: { bottom: 'never', top: 'never' },
      showIcon: true,
      style: {
        borderTopWidth: 2,
        borderTopColor: 'black'
      }
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardTabNavigator },
  SignUp: { screen: SignUpScreen }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeArea: {
    flex: 1,
   }
});