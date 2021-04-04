// import { useState } from 'react';

import Episode from './Episode';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

//let items = data.items;
class SaisonClass extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = 'AIzaSyAHBhkobdxxCEoX88SFbpzZR_uVAgnIV_c';
    this.playlistId = props.saison;
    this.url ='https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=snippet&maxResults=1000&playlistId='+this.playlistId+'&key='+this.API_KEY;

    this.state = {
      items: null,
      video:""
    };
  }

  componentDidMount() {
    fetch(this.url)
      .then((response) => response.json())
      .then((json) => this.setState({ items: json.items }));
  }
  //const [video, setVideo] = useState(items[0].contentDetails.videoId);
  //const [video, setVideo] = useState(items[0].contentDetails.videoId);
  render() {
    return (
      this.items && (
        <View style={styles.container}>
          <YoutubePlayer videoId={this.video} height={250} />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            libero atque magni quaerat nihil doloribus sapiente! Ipsa
            praesentium aut porro blanditiis molestiae quae odit tempore earum
            minus! Fuga, eum quis.
          </Text>
          <Text style={styles.labelSaison} onPress={{}}>
            Episode x
          </Text>
          <FlatList
            data={this.items}
            renderItem={({ item, idx }) => (
              <Episode
                title={item.snippet.title}
                videoId={item.contentDetails.videoId}
                setVideo={this.setState}
              />
            )}
          />
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backcgroundColor: 'black',
    width: 'auto',
  },
  description: {
    color: 'rgb(145, 145, 145)',
    margin: 10,
  },
  labelSaison: {
    color: '#fff',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default SaisonClass;
