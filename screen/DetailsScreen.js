import React from 'react';
import {View, Text} from 'react-native';

import Saison from '../components/Saison'
//props from MediaItem
export default function DetailsScreen({route}){
  return (
    <View style={{backgroundColor:'black'}}>
      <Saison saison={route.params.saison}/>
    </View>
  )
}