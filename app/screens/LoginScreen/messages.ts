/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginScreen screen!',
  },
  socialLoginPitch: {
    id: `${scope}.socialLoginPitch`,
    defaultMessage: 'Or Login Using',
  },
  googleLabel: {
    id: `${scope}.googleLabel`,
    defaultMessage: 'Google',
  },
  facebookLabel: {
    id: `${scope}.facebookLabel`,
    defaultMessage: 'Facebook',
  },
  signUpPitch: {
    id: `${scope}.signUpPitch`,
    defaultMessage: "Don't have a Bogo Account?",
  },
  signUpLabel: {
    id: `${scope}.signUpLabel`,
    defaultMessage: 'Create One',
  },
});
