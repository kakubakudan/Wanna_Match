// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} >
      <Text style={styles.title}>Welcome to Wanna_Match!</Text>
      
      {/* プロフセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>プロフ</Text>
        <Button title="プロフ" onPress={() => alert('プロフボタン pressed')} />
        <Button title="開始" onPress={() => alert('開始ボタン pressed')} />
        <Button title="予約" onPress={() => alert('予約ボタン pressed')} />
        <Button title="キャンセル" onPress={() => alert('キャンセルボタン pressed')} />
        <Button title="履歴" onPress={() => navigation.navigate('MatchHistory')} />
        <Button title="再戦" onPress={() => alert('再戦ボタン pressed')} />
      </View>

      {/* ポイント系のセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ポイント系</Text>
        <Button title="交換" onPress={() => alert('交換ボタン pressed')} />
        <Button title="確認" onPress={() => alert('確認ボタン pressed')} />
        <Button title="ポイント購入" onPress={() => alert('ポイント購入ボタン pressed')} />
      </View>

      {/* アカウント管理系のセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>アカウント管理</Text>
        <Button title="サインアップ" onPress={() => alert('サインアップボタン pressed')} />
        <Button title="アカウント削除" onPress={() => alert('アカウント削除ボタン pressed')} />
        <Button title="ログアウト" onPress={() => alert('ログアウトボタン pressed')} />
        <Button title="ログイン" onPress={() => alert('ログインボタン pressed')} />
      </View>

      {/* アクションボタンのセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>アクション</Text>
        <Button title="保存" onPress={() => alert('保存ボタン pressed')} />
        <Button title="編集" onPress={() => alert('編集ボタン pressed')} />
        <Button title="削除" onPress={() => alert('削除ボタン pressed')} />
        <Button title="送信" onPress={() => alert('送信ボタン pressed')} />
      </View>

      {/* モーダルウィンドウのボタンセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>モーダルウィンドウ</Text>
        <Button title="確認 (モーダル)" onPress={() => alert('確認ボタン (モーダル) pressed')} />
        <Button title="キャンセル (モーダル)" onPress={() => alert('キャンセルボタン (モーダル) pressed')} />
      </View>

      {/* フィルター検索のセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>フィルター検索</Text>
        <Button title="検索" onPress={() => alert('検索ボタン pressed')} />
        <Button title="フィルター" onPress={() => alert('フィルターボタン pressed')} />
      </View>

      {/* ソーシャルメディアのセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ソーシャルメディア</Text>
        <Button title="ライバル" onPress={() => alert('ライバルボタン pressed')} />
        <Button title="ブロック" onPress={() => alert('ブロックボタン pressed')} />
        <Button title="グループ作成" onPress={() => alert('グループ作成ボタン pressed')} />
        <Button title="フォロー" onPress={() => alert('フォローボタン pressed')} />
        <Button title="弟子師匠" onPress={() => alert('弟子師匠ボタン pressed')} />
        <Button title="ポスト" onPress={() => alert('ポストボタン pressed')} />
      </View>

      {/* ヘルプとサポートのセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ヘルプとサポート</Text>
        <Button title="ヘルプ" onPress={() => alert('ヘルプボタン pressed')} />
        <Button title="問い合わせ" onPress={() => alert('問い合わせボタン pressed')} />
      </View>

      {/* カスタムアクションのセクション */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>カスタムアクション</Text>
        <Button title="お気に入り" onPress={() => alert('お気に入りボタン pressed')} />
        <Button title="共有" onPress={() => alert('共有ボタン pressed')} />
        <Button title="通知" onPress={() => alert('通知ボタン pressed')} />
        <Button title="噂" onPress={() => alert('噂ボタン pressed')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
