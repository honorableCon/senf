import React from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';

import MediaItem from './MediaItem';

import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Category extends React.Component {
  //props from HomeScreen
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>   
              {this.props.title}
            </Text>
            <AntDesign
              style={styles.nextIcon}
              name={'pluscircleo'}
              size={25}
              color={'white'}
              onPress={() => {this.props.navigation.navigate('CategoryHighlight')}}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.category}
            renderItem={({ item }) => <MediaItem film={item} navigation={this.props.navigation}/>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: width,
    paddingVertical: 15,
    marginVertical: 10,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 25,
  },
  nextIcon: {
    marginRight:15,
    //position: screenWidth,
  },
});