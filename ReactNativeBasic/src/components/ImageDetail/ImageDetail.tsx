import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const ImageDetail = ({ imgSrc, title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image source={imgSrc} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
export default ImageDetail;
