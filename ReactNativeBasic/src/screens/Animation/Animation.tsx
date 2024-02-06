import React, {useRef, useState} from 'react';
import {View, Animated, TouchableOpacity, Text, Easing, PanResponder} from 'react-native';

const Animation = () => {
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
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animated.View 
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'pink',
          opacity: fadeAnim,
        }}></Animated.View>
 <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={{height:100,width:100,backgroundColor:'yellow'}} />
      </Animated.View>
      <TouchableOpacity onPress={onFadeIn}>
        <Text>Fade In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onFadeOut}>
        <Text>Fade out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animation;
