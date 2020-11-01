/*
 *
 * LoginScreen
 *
 */

import React from 'react';
import {View} from 'react-native';

import EmailPasswordForm from './EmailPasswordForm';

// import messages from './messages';
import style from './style';

import {LoginScreenProps} from './types';

function LoginScreen(props: LoginScreenProps) {
  // const [showLoader, setShowLoader] = useState(false);
  console.log('Login')
  return (
    <View style={style.container}>
      <EmailPasswordForm
        onSubmit={(value) => {
          // authentication.login({
          //   provider: 'local',
          //   data: {
          //     email: value.email,
          //     password: value.password,
          //   },
          // });
        }}
        onForgotPasswordPress={() => {}}
      />
    </View>
  );
}

export default LoginScreen;
