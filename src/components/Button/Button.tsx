import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import { Text, TextProps } from '../Text/Text';

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
  textProps?: Partial<TextProps>;
} & Omit<ButtonProps, 'children'>;

Button.Link = ({ label, textProps, ...props }: ButtonLinkProps) => {
  return (
    <TouchableOpacity {...props}>
      <S.Label {...textProps}>{label}</S.Label>
    </TouchableOpacity>
  );
};
