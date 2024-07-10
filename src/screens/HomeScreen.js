import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ヘッダーボタン */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Help button pressed')}>
            <Text style={styles.headerButtonText}>?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Notification button pressed')}>
            <Text style={styles.headerButtonText}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* ポイント表示 */}
        <View style={styles.pointContainer}>
          <Text style={styles.pointTitle}>ポイント</Text>
          <View style={styles.pointBox}>
            <Text style={styles.pointValue}>100P</Text>
            <Text style={styles.pointEquivalent}>0.00円相当</Text>
          </View>
        </View>

        {/* Matchボタン */}
        <TouchableOpacity style={styles.matchButton} onPress={() => alert('Match button pressed')}>
          <Text style={styles.matchButtonText}>Match</Text>
        </TouchableOpacity>

        {/* マッチ履歴 */}
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>マッチ履歴</Text>
          <View style={styles.historyBox}>
            <ScrollView>
              <Text>Item One</Text>
              <Text>Item Two</Text>
              <Text>Item Three</Text>
              <Text>Item Four</Text>
              <Text>Item Five</Text>
              <Text>Item Six</Text>
              <Text>Item Seven</Text>
              <Text>Item Eight</Text>
            </ScrollView>
          </View>
          <Button title="履歴を見る" onPress={() => navigation.navigate('MatchHistory')} />
        </View>

        {/* ショップ枠 */}
        <View style={styles.shopContainer}>
          <Text style={styles.shopTitle}>ショップ</Text>
          <View style={styles.shopBox}>
            <TouchableOpacity style={styles.cartButton} onPress={() => alert('Cart button pressed')}>
              <Text style={styles.cartButtonText}>🛒</Text>
            </TouchableOpacity>
            <Button title="Shop" onPress={() => alert('Shop button pressed')} />
          </View>
        </View>
      </ScrollView>

      {/* ナビゲーションバー */}
      <View style={styles.navBar}>
        <Button title="Filter" onPress={() => alert('Filter button pressed')} />
        <Button title="M" onPress={() => alert('M button pressed')} />
        <Button title="Profile" onPress={() => alert('Profile button pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, // ナビゲーションバーのスペースを確保
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10, // アイコンを少し下に配置するためにマージンを追加
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 24,
  },
  pointContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  pointTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 20,
    alignItems: 'center',
  },
  pointValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  pointEquivalent: {
    fontSize: 16,
  },
  matchButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginVertical: 20,
  },
  matchButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyBox: {
    maxHeight: 150, // 必要に応じて高さを調整
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    marginBottom: 10,
  },
  shopContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  shopTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shopBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartButton: {
    marginRight: 10,
  },
  cartButtonText: {
    fontSize: 24,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // 灰色
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
});

export default HomeScreen;
