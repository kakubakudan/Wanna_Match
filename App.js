import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MatchScreen from './src/screens/MatchScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ScreenA = () => (
  <View style={styles.centered}>
    <Text>Screen A</Text>
  </View>
);

const ScreenB = () => (
  <View style={styles.centered}>
    <Text>Screen B</Text>
  </View>
);

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const [pressCount, setPressCount] = useState(0);

  const handleOverlapButtonPress = useCallback(() => {
    setPressCount(prevCount => {
      const newCount = prevCount + 1;
      const routeName = newCount % 2 === 0 ? 'ScreenA' : 'ScreenB';
      navigation.navigate(routeName);
      return newCount;
    });
  }, [navigation]);

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Ionicons
              name={route.name === 'Home' ? 'home' : 'person'}
              size={20}
              color={isFocused ? 'tomato' : 'gray'}
            />
            <Text style={{ color: isFocused ? 'tomato' : 'gray' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={styles.overlapButton}
        onPress={handleOverlapButtonPress}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 66666,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlapButton: {
    position: 'absolute',
    bottom: 15,
    left: '50%',
    transform: [{ translateX: -30 }],
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
