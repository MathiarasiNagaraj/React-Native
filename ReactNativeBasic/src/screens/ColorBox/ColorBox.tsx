import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

const ColorBox = () => {
  const [stars, setStars] = useState([]);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const addNewStar = () => {
    const newStar = {
      id: new Date().getTime(),
      color: generateRandomColor(),
    };

    setStars(prevStars => {
      const newStars = [...prevStars];
      newStars.unshift(newStar);
      return newStars;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to Color Box -Learn UseState</Text>
      <ScrollView style={styles.Imgcontainer}>
        {stars.map(star => (
          <View
            key={star.id}
            style={[styles.star, {backgroundColor: star.color}]}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={addNewStar}>
        <Text>Add Box</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {fontSize: 23},
  Imgcontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    alignItem: 'center',
    padding: 16,
    margin: 20,
    marginTop: 40,
    height: 500,
    overflow: 'scroll',
    backgroundColor: 'yellow',
  },
  star: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  addButton: {
    backgroundColor: 'pink',
    width: 200,
    height: 50,
    fontColor: 'white',
    borderRadius: 25,
    color: '#ffffff',
    fontWeight: 'Bold',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default ColorBox;
