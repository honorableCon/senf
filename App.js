import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navigator from './Navigation';

export default function App() {
  return (
      <Navigator style={styles.container}/>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
  }
})