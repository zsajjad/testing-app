import 'react-native';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import fetchMock from 'fetch-mock-jest';

import { render } from 'utils/testWrapper';

import { LOGIN_ENDPOINT, LOGIN_EXPECTED_RESPONSE } from 'api/login';

import { HOME } from 'router/routeNames';

import LoginScreen from '../index';
import { API_URL } from '../../../constants';
import {
  AUTH_TOKEN_KEY,
  TEST_ID_EMAIL_INPUT,
  TEST_ID_PASSWORD_INPUT,
  TEST_ID_SUBMIT_BUTTON,
} from '../constants';

describe('Login Screen', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Expect to save token in AsyncStorage & navigate to home screen on successful login', async () => {
    const endPoint = `${API_URL}${LOGIN_ENDPOINT}`;
    fetchMock.post(endPoint, {
      status: 200,
      body: JSON.stringify(LOGIN_EXPECTED_RESPONSE),
    });

    const navigate = jest.fn();

    const email = 'email@email.com';
    const password = 'password';

    const screen = render(<LoginScreen navigation={{ navigate }} />);
    const emailInput = screen.getByTestId(TEST_ID_EMAIL_INPUT);
    const passwordInput = screen.getByTestId(TEST_ID_PASSWORD_INPUT);
    const button = screen.getByTestId(TEST_ID_SUBMIT_BUTTON);

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      fireEvent.changeText(passwordInput, password);
    });

    await waitFor(() => {
      fireEvent.press(button);
    });

    expect(fetchMock).toHaveBeenCalledWith(endPoint, {
      body: `{"email":"${email}","password":"${password}"}`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(HOME, {});
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      AUTH_TOKEN_KEY,
      LOGIN_EXPECTED_RESPONSE.data.tokens.jwtToken,
    );
  });
});
