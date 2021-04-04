import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native'
const Channel = ({logo, label}) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width: 150,
        height:100,
        margin:10,
        alignItems:'center',
        paddingTop:10,
        justifyContent: 'space-between',
    },
    label:{
        color:'#fff',
        backgroundColor:'rgba(128, 128, 128, 0.8)',
        width:150,
        textAlign:'center',
        padding:5,
    },
    logo:{
        height:70,
        maxWidth:100,
        resizeMode:'center',
    }
})
export default Channel;
