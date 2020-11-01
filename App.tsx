/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { StatusBar } from 'react-native';

import Router from 'router';
import LanguageProvider from 'components/LanguageProvider';

// import routeConfigs from 'router/routeConfigs';
import { translationMessages } from './app/i18n';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LanguageProvider locale="en" messages={translationMessages}>
        <Router />
      </LanguageProvider>
    </>
  );
};

export default App;
