import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Categorie from '../components/Categorie';

import { popular, recent, tendance } from '../data';
import Header from '../components/Header';

export default function HomeScreen({ navigation }) {
  const categories = [
    { cat: 'Séries populaires', list: popular },
    { cat: 'Séries recents', list: recent },
    { cat: 'Séries tendance', list: tendance },
  ];
  return (
    <View vert={true} style={styles.container}>
      <Header />
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Categorie title={item.cat} category={item.list} navigation={navigation} />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0,
    backgroundColor:'black',
  },
});
