import 'react-native'
import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react-native';

import { render } from "utils/testWrapper";
import EmailPasswordForm from '../index';
import { delay } from 'lodash';

describe('<EmailPasswordForm />', () => {
  it('Expect to show password required', async () => {
    const email = 'email@email.com'

    const { getByTestId } = render(<EmailPasswordForm onSubmit={() => {}} onForgotPasswordPress={() => {}} />)
    const emailInput = getByTestId("emailInput");
    const button = getByTestId("submitButton");


    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);
      fireEvent.press(button);
      expect(getByTestId("passwordInput_ERROR")).toBeDefined();
    });
  });  
  
  it('Expect to call handle submit with email & password', async () => {
    const email = 'email@email.com'
    const password = 'qwerty1234'
    const expectedOutput = {
      email,
      password,
    }
    let output = {};
    const onSubmit = jest.fn(data => (output = data))

    const { getByTestId } = render(<EmailPasswordForm onSubmit={onSubmit} onForgotPasswordPress={() => {}} />)
    const button = getByTestId("submitButton");
    const emailInput = getByTestId("emailInput");
    const passwordInput = getByTestId("passwordInput");

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.changeText(passwordInput, password);
      expect(passwordInput.props.value).toBe(password);

      fireEvent.press(button);
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(output).toEqual(expectedOutput);
    });
  });  
});
