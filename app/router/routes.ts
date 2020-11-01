import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.HOME]: {
    ...routeConfigs[routeNames.HOME],
    screen: HomeScreen,
  },
  [routeNames.LOGIN]: {
    ...routeConfigs[routeNames.LOGIN],
    screen: LoginScreen,
  },
};

export default routes;
