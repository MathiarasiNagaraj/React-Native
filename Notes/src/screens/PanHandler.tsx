import React, {useRef, useEffect} from 'react';
import {Animated, PanResponder, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native';
export const PanHandler = () => {
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
    <View>
         <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={{height:100,width:100,backgroundColor:'yellow'}} />
      </Animated.View>
   </View>
  )
}
