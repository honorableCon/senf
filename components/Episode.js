import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

//let grey='rgba(123, 123, 123, 0.245)';
//props from Saison
function Episode(props) {
  const handlePress = () => {
    //grey = 'rgba(123, 0, 0, 0.245)'
    props.setVideo(props.videoId);
    setPressed(true);
  };
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.7}
      underlayColor="#fff">
      <Text
        style={[
          styles.title,
          {
            backgroundColor: pressed
              ? 'rgba(123, 0, 0, 0.245)'
              : 'rgba(123, 123, 123, 0.245)',
          },
        ]}
        onPress={handlePress}>
        {props.title}
      </Text>
    </TouchableHighlight>
  );
}

let styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginVertical: 1,
  },
});

export default Episode;
