import React, {useEffect} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
export const Notification = () => {
  useEffect(() => {
    createChannel();
  }, []);
  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'notifi', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };
    const onPressHandler = () => {
      createChannel()
    PushNotification.localNotification({
      channelId: 'notifi',
      title: 'Notification',
      message: 'Notification from app',
    });
  };
  return (
    <View>
      <Text> Hi</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Click Me</Text>
      </Pressable>
      <TouchableOpacity onPress={onPressHandler}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};
