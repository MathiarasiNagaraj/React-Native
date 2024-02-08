import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Fade from '../screens/Fade';
import Rotation from '../screens/Rotation';
import {PanHandler} from '../screens/PanHandler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Fade"
        component={Fade}
        options={{
          tabBarLabel: 'Fade ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Rotation"
        component={PanHandler}
        options={{
          tabBarLabel: 'Pan responder',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="PanHandler"
        component={PanHandler}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
