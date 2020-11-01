/**
 *
 * EmailPasswordForm
 *
 */

import React, {useRef} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import {Formik} from 'formik';

import Button from 'theme/Button';
import Input from 'theme/Input';
import PasswordInput from 'theme/Input/PasswordInput';
import FormattedMessage, {useFormattedMessage} from 'theme/FormattedMessage';

import style from './style';
import messages from './messages';

interface EmailPasswordFormProps {
  onSubmit: (data: EmailPasswordFormState) => void;
  onForgotPasswordPress: () => void;
}

type EmailPasswordFormState = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

const initialValue = {
  email: '',
  password: '',
};

const EmailPasswordForm: React.FC<EmailPasswordFormProps> = (props) => {
  const passwordFieldRef = useRef();

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  return (
    <Animatable.View style={[style.container]} animation="fadeIn">
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={props.onSubmit}
        validateOnChange={false}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <View style={style.inputContainer}>
              <Input
                textContentType="emailAddress"
                autoCompleteType="email"
                keyboardType="email-address"
                placeholder={emailPlaceholder}
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                onSubmitEditing={() => {
                  // @ts-ignore
                  if (passwordFieldRef?.current?.focus) {
                    // @ts-ignore
                    passwordFieldRef.current?.focus();
                  }
                }}
                error={touched.email ? errors.email : null}
                label={<FormattedMessage {...messages.emailLabel} isFragment />}
                testID="emailInput"
              />
            </View>
            <View style={style.inputContainer}>
              <PasswordInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                onSubmitEditing={handleSubmit}
                placeholder={passwordPlaceholder}
                returnKeyType="send"
                ref={passwordFieldRef}
                error={touched.password ? errors.password : null}
                label={
                  <FormattedMessage {...messages.passwordLabel} isFragment />
                }
                testID="passwordInput"
              />
            </View>
            <FormattedMessage
              {...messages.forgotPasswordLabel}
              onPress={props.onForgotPasswordPress}
              style={style.forgotPasswordLabel}
            />
            <View style={style.buttonContainer}>
              <Button
                flex
                disabled={!isValid}
                type="accent"
                label={
                  <FormattedMessage {...messages.submitLabel} isFragment />
                }
                onPress={handleSubmit}
                testID="submitButton"
              />
            </View>
          </>
        )}
      </Formik>
    </Animatable.View>
  );
};

export default EmailPasswordForm;
