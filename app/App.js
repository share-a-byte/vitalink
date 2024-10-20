import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatListScreen from './chatListScreen';
import ChatScreen from './chatScreen'; // Assuming you have a ChatScreen component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="chatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;