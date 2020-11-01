import { HOME, LOGIN } from './routeNames';

const routeConfigs = {
  [LOGIN]: {
    path: '/login',
  },
  [HOME]: {
    path: '/',
    parse: {},
  },
};

export default routeConfigs;
