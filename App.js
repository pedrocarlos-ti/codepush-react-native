import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CodePush from 'react-native-code-push';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.info}>React Native CODE-PUSH</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
  },
});

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
