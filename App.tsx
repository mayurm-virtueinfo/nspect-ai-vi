/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 2000);
  }, []);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["top", 'bottom']}>
        {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}
        <AppContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex:1,
  }
});

export default App;
