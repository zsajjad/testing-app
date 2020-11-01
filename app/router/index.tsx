// import isEqual from 'lodash/isEqual';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import { HOME } from './routeNames';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        {Object.keys(routes).map((routeKey) => (
          <Stack.Screen
            key={routeKey}
            name={routeKey}
            component={routes[routeKey].screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
