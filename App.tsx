import React from 'react';
import firebase from 'firebase'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import { Provider } from 'react-redux';
import { store } from './src/redux';



import Home from './src/pages/Home'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  })


  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: 'AIzaSyAz1Wgvk3yEwIRk6837HE0zryy7aLfYunE',
      authDomain: 'ccal-database.firebaseapp.com',
      databaseURL: 'https://ccal-database-default-rtdb.firebaseio.com',
      projectId: 'ccal-database',
      storageBucket: 'ccal-database.appspot.com',
      messagingSenderId: '894128015630',
      appId: '1:894128015630:web:ec6be9ace0dcaabbc2af5f',
      measurementId: 'G-KR2TNXM34K',
    };
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
