import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { Color } from '@/types/theme';

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

type ButtonLinkProps = {
  label: string;
  color?: Color;
} & Omit<ButtonProps, 'children'>;

Button.Link = ({ label, color, ...props }: ButtonLinkProps) => {
  return (
    <TouchableOpacity {...props}>
      <S.Label color={color}>{label}</S.Label>
    </TouchableOpacity>
  );
};
