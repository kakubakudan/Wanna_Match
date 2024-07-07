// src/screens/MatchHistoryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match History Screen</Text>
      {/* マッチ履歴画面の内容をここに追加 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default MatchHistoryScreen;
