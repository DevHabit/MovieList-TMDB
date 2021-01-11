/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {MovieProvider} from '@context';
import {AppNavigator} from '@navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <MovieProvider>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </MovieProvider>
  );
};

export default App;
