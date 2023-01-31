import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Text } from '../Text/Text';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  label?: string;
} & TouchableOpacityProps &
  S.ContainerProps;

export function Button({ children, label, ...props }: ButtonProps) {
  const content = label ? <Text color="white">{label}</Text> : children;
  const accessibilityLabel = props.accessibilityLabel || label;

  return (
    <S.Container accessibilityLabel={accessibilityLabel} {...props}>
      {content}
    </S.Container>
  );
}
