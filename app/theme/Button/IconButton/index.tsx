/**
 *
 * IconButton
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import TouchFeedback from 'theme/TouchFeedback';

import Colors from 'theme/Colors';
import Icon, { IconProps } from 'theme/Icon';

const style = StyleSheet.create({
  iconButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  disabled: {
    opacity: 0.7,
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  icon: {
    fontSize: 18,
    color: Colors.textBlack,
  },
});

type IconButtonProps = {
  onPress: (...args: any[]) => any;
  disabled?: boolean;
  type?: 'primary' | 'accent';
  icon?: IconProps;
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { onPress, disabled } = props;
  return (
    <TouchFeedback
      // disabled={disabled}
      onPress={onPress}
      style={[style.iconButton, disabled ? style.disabled : {}]}
    >
      <Icon style={[style.icon]} {...props.icon} />
    </TouchFeedback>
  );
};

export default IconButton;
