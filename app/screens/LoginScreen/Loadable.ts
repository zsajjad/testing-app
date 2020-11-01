/**
 *
 * Asynchronously loads the component for LoginScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
