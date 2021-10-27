import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Home';

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
    </Stack.Navigator>
  );
};

export default StackNavigator;
