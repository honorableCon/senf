import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';
import data from './data';
export default class MediaItem extends React.Component {
  render() {
    //props from Category
    const { film, navigation } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Details', {saison:data[film.id]});
        }}
        style={styles.container}
        activeOpacity={0.7}
        underlayColor="grey">
        <ImageBackground source={{ uri: film.url }} style={styles.cover}>
          <Text onPress={() => {}} numberOfLines={2} style={styles.title}>
            {film.title}
          </Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 130,
    color: 'red',
    marginRight: 5,
  },
  cover: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'center',
  },
  title: {
    color: 'white',
    backgroundColor: 'rgba(109, 109, 109, 0.6)',
    textAlign: 'center',
    fontSize: 14,
    padding: 5,
  },
});
