import React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import Channel from './Channel.jsx';
import tvdata from './tvdata'
function TvList() {
    return (
        <ScrollView>
            <View style={styles.container}>
                {tvdata.map( (item) => <Channel label={item.label} logo={item.logo} key={item.label}/> )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
    }
})

export default TvList
