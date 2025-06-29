/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import Navigation from "./Navigation/Navigation";

const App=(props)=>{
  return (
   <Navigation />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
