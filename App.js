import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MatchScreen from './src/screens/MatchScreen';
import MatchHistoryScreen from './src/screens/MatchHistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen'; // プロファイル画面も追加
import PostScreen from './src/screens/PostScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Match" component={MatchScreen} />
      <Stack.Screen name="MatchHistory" component={MatchHistoryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

