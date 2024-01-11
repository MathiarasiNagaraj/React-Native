import React from 'react';
import {Text, View} from 'react-native';
const Profile = ({navigation, route}) => {
  return (
    <View>
      <Text>Profile Screen -{route.params.name}</Text>
    </View>
  );
};

export default Profile;
