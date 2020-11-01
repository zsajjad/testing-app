/**
 *
 * PasswordInput
 *
 */
import React, { useState } from 'react';
import { View } from 'react-native';

import IconButton from 'theme/Button/IconButton';

import style from './style';
import Input, { InputProps } from './index';
import { TextInput } from 'react-native-gesture-handler';

type PasswordInput = InputProps;

const PasswordInput = React.forwardRef(
  (props: PasswordInput, ref: React.Ref<TextInput>) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Input
          clearButtonMode="never"
          {...props}
          autoCompleteType="password"
          secureTextEntry={!show}
          textContentType="password"
          importantForAutofill="yes"
          ref={ref}
        />
        {props.value ? (
          <View style={style.showPasswordButton}>
            <IconButton
              onPress={() => setShow(!show)}
              icon={{
                name: show ? 'eye-off' : 'eye',
              }}
            />
          </View>
        ) : null}
      </>
    );
  },
);

export default PasswordInput;
