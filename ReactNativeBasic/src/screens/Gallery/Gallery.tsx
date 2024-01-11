import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
const Gallery = () => {
  const data = [
    {title: 'nature 1', src: require('../../../assets/images/nature1.jpeg')},
    {title: 'nature 3', src: require('../../../assets/images/nature3.jpeg')},
    {title: 'nature 4', src: require('../../../assets/images/nature4.jpeg')},
    {title: 'nature 5', src: require('../../../assets/images/nature5.jpeg')},
    {title: 'nature 6', src: require('../../../assets/images/nature6.jpeg')},
    {title: 'nature 7', src: require('../../../assets/images/nature7.jpeg')},
    {title: 'nature 8', src: require('../../../assets/images/nature8.jpeg')},
  ];
  const handleImagePress = title => {
    Alert.alert('Image Clicked', `You clicked on ${title}`);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleImagePress(item.title)}>
            <Image source={item.src} style={styles.img} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  img: {
    height: 100,
    width: 200,
    marginTop: 3,
  },
});
export default Gallery;
