/**
 *
 * Input
 *
 */
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import Text from 'theme/Text';
import style, {inputStyleProps} from './style';

export interface InputProps extends TextInputProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
}

// @ts-ignore
const Input = React.forwardRef((props: InputProps, ref: React.RefObject) => (
  <>
    {props.label ? <Text style={style.label}>{props.label}</Text> : null}
    <TextInput
      clearButtonMode="unless-editing"
      {...inputStyleProps}
      blurOnSubmit
      {...props}
      ref={ref}
      style={[
        style.input,
        props.label ? style.inputWithLabel : {},
        props.error ? style.errorInput : {},
        props.multiline ? style.multiline : {},
      ]}
    />
    {props.error ? <Text style={style.error}>{props.error}</Text> : null}
  </>
));

export default Input;
