import React from 'react';
import {Text, View, Button} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Profile Page"
        onPress={() => navigation.navigate('Profile', {name: 'Mathiarasi'})}
      />
    </View>
  );
};

export default Home;
