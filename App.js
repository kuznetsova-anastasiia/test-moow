import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Navigate } from './Navigate';
import { Navbar } from './components/Navbar';
import { ApplicationProvider } from '@ui-kitten/components'
import * as eva from '@eva-design/eva';

const fonts = () => Font.loadAsync({
  'mulish-b': require('./assets/fonts/Mulish-Bold.ttf'),
  'mulish-m': require('./assets/fonts/Mulish-Medium.ttf'),
  'mulish-l': require('./assets/fonts/Mulish-Light.ttf')
});

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigate />
        <Navbar />
      </ApplicationProvider>
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setIsLoaded(true)} onError={() => console.log('error')} />
    )
  }
}

const styles = StyleSheet.create({

});
