import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Home';
import {VideoStreaming} from '../VideoStreaming';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#5000ca',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: 'Video Streaming',
          headerStyle: {
            backgroundColor: '#5000ca',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
        name="VideoStreaming"
        component={VideoStreaming}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
