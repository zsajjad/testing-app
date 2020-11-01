/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.HomeScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Home Screen',
  },
  exploreLabel: {
    id: `${scope}.exploreLabel`,
    defaultMessage: 'Explore',
  },
  userHomeLabel: {
    id: `${scope}.userHomeLabel`,
    defaultMessage: 'My Bogo',
  },
  profileLabel: {
    id: `${scope}.profileLabel`,
    defaultMessage: 'Profile',
  },
  buttonLabel: {
    id: `${scope}.buttonLabel`,
    defaultMessage: 'Entity Details',
  },
  categoriesTile: {
    id: `${scope}.categoriesTile`,
    defaultMessage: 'Explore Your Deals For You',
  },
  karachiLabel: {
    id: `${scope}.karachiLabel`,
    defaultMessage: 'Set karachi as city',
  },
  lahoreLabel: {
    id: `${scope}.lahoreLabel`,
    defaultMessage: 'Set lahore as city',
  },
  featuredBrand: {
    id: `${scope}.featuredBrand`,
    defaultMessage: 'Featured Brand',
  },
  toastMessage: {
    id: `${scope}.toastMessage`,
    defaultMessage: 'Press again to exit app',
  },
});
