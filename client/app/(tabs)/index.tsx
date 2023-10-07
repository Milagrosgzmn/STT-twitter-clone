import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Tabs } from 'expo-router';
import Post from "../../components/post/postTemplate"
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FollowingScreen from './home/following'; // Import your "Following" screen component
import LatestScreen from './home/latestScreen'; // Import your "Latest" screen component

export default function Home() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator>
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
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
