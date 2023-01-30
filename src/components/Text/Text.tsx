import React from 'react';
import { TextPropsIOS, TextPropsAndroid } from 'react-native';

import * as S from './Text.styles';

type TextNativeProps = TextPropsAndroid & TextPropsIOS;

export type TextProps = {
  children: React.ReactNode;
} & TextNativeProps &
  S.TextStyleProps;

export function Text({ children, ...props }: TextProps) {
  return <S.Text {...props}>{children}</S.Text>;
}

Text.Title = ({ children, ...props }: TextProps) => {
  return <S.Title {...props}>{children}</S.Title>;
};

Text.Paragraph = ({ children, ...props }: TextProps) => {
  return <S.Paragraph {...props}>{children}</S.Paragraph>;
};
