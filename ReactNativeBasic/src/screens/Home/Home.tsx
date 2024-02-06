import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ImageDetail from '../../components/ImageDetail/ImageDetail';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}> Let's Learn React Native </Text>
      {/* <ImageDetail
        imgSrc={require('../../../assets/images/reactnative.png')}
        title={''}
      /> */}
      <Button
        title="Start"
        style={styles.button}
        onPress={() => navigation.navigate('Profile', {name: 'Mathiarasi'})}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 23,
  },
  button: {
    width: 80,
  },
});
export default Home;
