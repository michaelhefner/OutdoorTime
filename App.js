import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginUserForm from './user/LoginUserForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import User from './user/User';


const store = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="User" component={User} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;