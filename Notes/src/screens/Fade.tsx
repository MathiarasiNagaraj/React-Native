import React, {useRef, useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native';

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
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Animated.View 
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'pink',
        opacity: fadeAnim,
      }}></Animated.View>

    <TouchableOpacity onPress={onFadeIn}>
      <Text>Fade In</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={onFadeOut}>
      <Text>Fade out</Text>
    </TouchableOpacity>
  </View>

  )
}

export default Fade