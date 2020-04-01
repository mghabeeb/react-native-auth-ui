import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {NativeRouter} from 'react-router-native';

import Login from './Containers/Login';

const App = () => (
  <NativeRouter>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Login />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default App;
