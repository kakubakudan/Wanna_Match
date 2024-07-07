import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pointContainer}>
        <Text style={styles.pointText}>ポイント: 100P</Text>
        <Text style={styles.pointText}>0.00円相当</Text>
      </View>
      <Button title="Match" onPress={() => alert('Match button pressed')} />
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>マッチ履歴</Text>
        <Text>Item One</Text>
        <Text>Item Two</Text>
        <Text>Item Three</Text>
        <Button title="履歴を見る" onPress={() => navigation.navigate('MatchHistory')} />
      </View>
      <View style={styles.navBar}>
        <Button title="Shop" onPress={() => alert('Shop button pressed')} />
        <Button title="Filter" onPress={() => alert('Filter button pressed')} />
        <Button title="M" onPress={() => alert('M button pressed')} />
        <Button title="Profile" onPress={() => alert('Profile button pressed')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pointContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  pointText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
