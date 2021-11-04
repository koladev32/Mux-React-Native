import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { NotifierWrapper } from 'react-native-notifier';

export default function App() {
  return (
    <NotifierWrapper>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NotifierWrapper>
  );
}
