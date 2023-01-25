import React from 'react';
import {LogBox} from 'react-native';

import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}
