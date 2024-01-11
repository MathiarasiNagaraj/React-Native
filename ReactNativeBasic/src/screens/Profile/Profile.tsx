import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Button} from 'react-native';
import {TOPIC_DATA} from '../../constants/commonConstants';
const Profile = ({navigation, route}) => {
  const Lists = <FlatList />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TOPIC_DATA}
        renderItem={({item}) => (
            <Button style={styles.btn} title={item.title}
            onPress={() => navigation.navigate(item.component)}
            />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
