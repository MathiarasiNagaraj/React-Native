import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import ColorBox from './src/screens/ColorBox/ColorBox';
import Gallery from './src/screens/Gallery/Gallery';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Topics'}}
        />
        <Stack.Screen
          name="ColorBox"
          component={ColorBox}
          options={{title: 'ColorBox'}}
        />
         <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{title: 'Gallery'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
