import React, {useEffect} from 'react';
import {
    Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
export const Notification = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification using Notifee',
          body: 'Main body content of the notification',
          android: {
            channelId,
            smallIcon: 'ic_launcher',
            pressAction: {
              id: 'default',
            },
          },
        });
      }
      async function onCreateTriggerNotification() {
        const date = new Date(Date.now());
        date.setHours(12);
        date.setMinutes(20);
    
        // Create a time-based trigger
        const trigger: TimestampTrigger = {
          type: TriggerType.TIMESTAMP,
          timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
        };
    
        // Create a trigger notification
        await notifee.createTriggerNotification(
          {
            title: 'Meeting with Jane',
            body: 'Today at 11:20am',
            android: {
              channelId: 'your-channel-id',
            },
          },
          trigger,
        );
      }
    
//   useEffect(() => {
//     createChannel();
//   }, []);
//   const createChannel = () => {
//     PushNotification.createChannel(
//       {
//         channelId: 'notifi', // (required)
//         channelName: 'My channel', // (required)
//         channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//         playSound: true, // (optional) default: true
//         soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//         importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//         vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//       },
//       created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
//     );
//   };
//   const onPressHandler = () => {
//     createChannel();
//     PushNotification.localNotification({
//       channelId: 'notifi',
//       title: 'Notification',
//       message: 'Notification from app',
//     });
//   };
  return (
    <View>
      <Text> Hi</Text>
      {/* <Pressable onPress={onPressHandler}>
        <Text style={styles.text}>Click Me</Text>
      </Pressable>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={styles.text}>Click Me</Text>
          </TouchableOpacity> */}
                    <Button title="Trigger Notification" onPress={() => onCreateTriggerNotification()} />
          <Button title="Display Notification" onPress={() => onDisplayNotification()} />

          <View>
              
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    color: 'black',
  },
});
