import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FollowingScreen from '../home/following'; // Import your "Following" screen component
import LatestScreen from '../home/latestScreen'; // Import your "Latest" screen component

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  const colorScheme = useColorScheme();
  const conditionalColor = colorScheme === 'light' ? 'lavender' : 'white';
  const conditionalTextColor = colorScheme === 'light' ?  'white': 'black';

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Following" // Set the initial tab
        screenOptions={{
  tabBarActiveTintColor: "black",
  tabBarLabelStyle: {
    fontWeight: "bold",
    color: conditionalTextColor,
  },
  tabBarItemStyle: {
    backgroundColor: conditionalColor
  },
  tabBarIndicatorStyle: {
    backgroundColor:conditionalColor
  
}
        }}
      >
        <Tab.Screen name="Following" component={FollowingScreen} />
        <Tab.Screen name="Latest" component={LatestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
