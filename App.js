import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import TabNav from './components/TabNav';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <TabNav />
        </NativeBaseProvider>
      </NavigationContainer>
      <StatusBar
        style='dark'
        hidden={true}
      />
    </SafeAreaProvider>
  );
}
