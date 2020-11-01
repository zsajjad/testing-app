/*
 *
 * LoginScreen
 *
 */

import AsyncStorage from '@react-native-community/async-storage';
import loginAPI from 'api/login';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { HOME } from 'router/routeNames';
import FullScreenLoader from 'theme/FullScreenLoader';
import Text from 'theme/Text';
import { AUTH_TOKEN_KEY } from './constants';

import EmailPasswordForm from './EmailPasswordForm';

// import messages from './messages';
import style from './style';

import { LoginScreenProps } from './types';

interface IScreenState {
  processing?: boolean;
  success?: boolean;
  error?: boolean;
}

function LoginScreen(props: LoginScreenProps) {
  const [state, set] = useState<IScreenState>({
    processing: false,
    success: false,
    error: false,
  });
  const setState = (nextState: IScreenState) => set({ ...state, ...nextState });

  const onSubmit = async (value: { email: string; password: string }) => {
    setState({
      processing: true,
      error: false,
      success: false,
    });
    try {
      const resp = await loginAPI({
        email: value.email,
        password: value.password,
      });
      if (resp?.data?.tokens?.jwtToken) {
        await AsyncStorage.setItem(
          AUTH_TOKEN_KEY,
          resp?.data?.tokens?.jwtToken,
        );
        setState({
          processing: false,
          success: true,
        });
        return;
      }
      throw Error('Something went wrong');
    } catch (e) {
      console.log(e);
      setState({
        processing: false,
        error: true,
      });
    }
  };

  useEffect(() => {
    if (state.success) {
      props.navigation.navigate(HOME, {});
    }
  }, [props.navigation, state.success]);

  return (
    <View style={style.container}>
      <EmailPasswordForm
        onSubmit={onSubmit}
        onForgotPasswordPress={() => null}
      />
      {state.processing ? <FullScreenLoader /> : null}
      {state.error ? <Text>Something went wrong</Text> : null}
    </View>
  );
}

export default LoginScreen;
