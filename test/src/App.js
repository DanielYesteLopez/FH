import './App.css';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './MainPage';
import Information from './Information';
import Services from './Services';
import SelectSport from './SelectSport';
import Soccer from './Soccer';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <div className="App">
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Information" component={Information}/>
        <Stack.Screen name="Services" component={Services}/>
        <Stack.Screen name="SelectSport" component={SelectSport}/>
        <Stack.Screen name="Soccer" component={Soccer}/>
      </Stack.Navigator>
    </NavigationContainer>
    </div>
  );
}

export default App;
