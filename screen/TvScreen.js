import * as React from 'react';
import {View , Text} from 'react-native';
import TvList from "../components/TvList.jsx";

export default function TvScreen(){
  return (
    <View style={{ flex:1}}>
      <TvList/>
    </View>
  )
}