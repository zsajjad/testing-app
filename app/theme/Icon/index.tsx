/**
 *
 * Icon
 *
 */
import React from 'react';
import { Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type IconProps = {
  animated?: boolean;
  font?: 'feather' | 'simpleLine' | 'ionicons';
  name?: string;
  size?: number;
  color?: string;
  [x: string]: any;
};

const animatedElements = {
  feather: Animated.createAnimatedComponent(Feather),
  simpleLine: Animated.createAnimatedComponent(SimpleLineIcons),
  ionicons: Animated.createAnimatedComponent(Ionicons),
};

const normalElements = {
  feather: Feather,
  simpleLine: SimpleLineIcons,
  ionicons: Ionicons,
};

const Icon: React.FC<IconProps> = ({
  animated = false,
  font = 'feather',
  ...props
}) => {
  const Element = animated ? animatedElements[font] : normalElements[font];
  return <Element {...props} />;
};

export default Icon;
