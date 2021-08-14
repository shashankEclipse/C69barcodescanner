import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Booktransaction from './screens/Booktransaction';
import Searchscreen from './screens/Searchscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}
  const TabNavigator = createBottomTabNavigator({
    Transaction:{screen:Booktransaction},
    Search:{screen:Searchscreen}
  });
  const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
