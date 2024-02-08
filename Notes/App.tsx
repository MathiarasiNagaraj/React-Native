import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Animation  from './src/screens/Animation';
import { Storage } from './src/screens/Storage';
import { Photo } from './src/screens/Photo';
import { Notification } from './src/screens/Notification';
import { Location } from './src/screens/Location';
import {enableLatestRenderer} from 'react-native-maps';
const Drawer = createDrawerNavigator();
const App = () => {
  enableLatestRenderer();
  return (
  
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Animation' component={Animation} />
          <Drawer.Screen name='Location' component={Location} />
          <Drawer.Screen name='Notification' component={Notification} />
          <Drawer.Screen name='Photo' component={Photo} />
          {/* <Drawer.Screen name='Storage' component={Storage}/> */}
        </Drawer.Navigator>
      </NavigationContainer>
</GestureHandlerRootView>
  )
}
export default App