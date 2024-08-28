// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ヘッダーボタン */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Help button pressed')}>
           <View style={styles.iconBackground}>
             <Text style={styles.headerButtonText}>?</Text>
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.headerButton} onPress={() => alert('Notification button pressed')}>
           <View style={styles.iconBackground}>
             <Text style={styles.headerButtonText}>🔔</Text>
           </View>
         </TouchableOpacity>
       </View>


        

        {/* ポイント表示 */}
        <View style={styles.pointContainer}>
          <Text style={styles.pointTitle}>ポイント</Text>
          <View style={styles.pointBox}>
          <Text style={styles.pointTitle}>ポイント</Text>
            <Text style={styles.pointValue}>100P</Text>
            <Text style={styles.pointEquivalent}>0.00円相当</Text>
          </View>
        </View>

        {/* Matchボタン */}
        <TouchableOpacity style={styles.MatchButton} onPress={() => navigation.navigate('MatchScreen')}>
          <Text style={styles.MatchButtonText}>Match</Text>
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
          <Button title="履歴を見る" onPress={() => navigation.navigate('MatchHistoryScreen')} />
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
    paddingBottom: 10, // ナビゲーションバーのスペースを確保
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  headerButton: {
    // 必要に応じて調整
  },
  iconBackground: {
    borderRadius: 5,
    padding: 1, 
    borderRadius: 50,// アイコンの周りにパディングを追加
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#c7c7c7',
    alignItems: 'center',
  },
  pointValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  pointEquivalent: {
    fontSize: 16,
  },
  MatchButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 30,
    paddingHorizontal: 120,
    borderRadius: 50,
    marginVertical: 0,
  },
  MatchButtonText: {
    color: '#FFF',
    fontSize: 30,
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
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
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
});

export default HomeScreen;
