import React, {useRef, useEffect, useState} from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Fade = () => {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const onFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,

      useNativeDriver: true,
    }).start();
  };
  const onFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,

      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['black', 'white'], // Adjust colors as needed
          }),
        },
      ]}>
      <Animated.Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVw84yVl80nghrRRX45XDqR_TkWWkx9rUQ9ipv_TcbFqZT_6JN',
        }}
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'pink',
          opacity: fadeAnim,
        }}></Animated.Image>

      <TouchableOpacity onPress={onFadeIn}>
        <Animated.Text
          style={[
            styles.text,
            {
              color: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [ 'white','black'], // Adjust colors as needed
              }),
            },
          ]}>
          Light On
        </Animated.Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onFadeOut}>
        <Animated.Text
          style={[
            styles.text,
            {
              color: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [ 'black','black',], // Adjust colors as needed
              }),
            },
          ]}>
          Light Off
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Fade;
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '400',
  },
  container: {
    flex: 1,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
