import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header() {
  return (
    <View
      style={{
        color: '#fff',
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'Roboto',
      }}>
      <Image />
    </View>
  );
}
