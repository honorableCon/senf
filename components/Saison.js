import Episode from './Episode';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet, Alert, TouchableHighlight, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker'

import Video from './Video';
//import YoutubePlayer from 'react-native-youtube-iframe';
//import { AntDesign } from '@expo/vector-icons';
//let items = data.items;

//props from DetailsScreen
export default function Saison(props) {
  let API_KEY = 'AIzaSyCWcVdkZ8EfPe9LvCUHXcSg3c-EimIZUB0';
  const {width, height} = Dimensions.get('window');
  //let API_KEY = 'AIzaSyAmetWZaWKZzoEdGhbBUTJwfe_xrHK12IM';
  //console.log(props.saison.saison1);
  let [playlistId, setPlaylistId] = useState(props.saison.saison1);
  let url ='https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=snippet&maxResults=1000&playlistId='+playlistId+'&key='+API_KEY;

  const [video, setVideo] = useState(null);
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setItems(json.items));
  });
  const [saison, setSaison] = useState("Saison 1");
  const handleValueChange = (item)=>{
    setSaison(item);
    setPlaylistId(props.saison[item]);
  }
  return (
    items && (
      <View style={styles.container}>
        <Video videoId={video || items[0].contentDetails.videoId}/>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro libero
          atque magni quaerat nihil doloribus sapiente! Ipsa praesentium aut
          porro blanditiis molestiae quae odit tempore earum minus! Fuga, eum
          quis.
        </Text>
        <Picker selectedValue={saison} style={styles.saisonPicker} onValueChange={handleValueChange}>
          <Picker.Item label="Saison 1" value="Saison 1"/>
          <Picker.Item label="Saison 2" value="Saison 2"/>
          <Picker.Item label="Saison 3" value="Saison 3"/>
          <Picker.Item label="Saison 4" value="Saison 4"/>
        </Picker>
        {/* 
          <AntDesign
              style={styles.moreIcon}
              name={'downcircleo'}
              size={25}
              color={'white'}
              onPress={() => {alert('Ok')}}
            /><View style={styles.headSaison}>
            <AntDesign
              style={styles.moreIcon}
              name={'downcircleo'}
              size={25}
              color={'white'}
              onPress={() => {alert('Ok')}}
            />
          </View> 
        */}
        {/* <FlatList
          data={items}
          renderItem={({ item, idx }) => (
            <Episode
              title={item.snippet.title}
              videoId={item.contentDetails.videoId}
              setVideo={setVideo}
            />
          )}
        /> */}
      <ScrollView style={{height:height-200}}>
        {items.map( (item) => 
          <Episode 
            title={item.snippet.title}
            videoId={item.contentDetails.videoId}
            setVideo={setVideo}
            key={item.contentDetails.videoId}
          /> 
        )}
      </ScrollView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 'auto',
    height:'auto',
    // flex:1,
  },
  description: {
    color: 'rgb(145, 145, 145)',
    margin: 10,
    height:30,
  },
  headSaison: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingVertical:10,
  },
  saisonPicker: {
    color: '#fff',
    //fontWeight: 'bold',
    //size: 35,
  },
});
