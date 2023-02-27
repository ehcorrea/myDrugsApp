import React from 'react';
import { ViewProps } from 'react-native';

import * as S from './Spacing.styles';

export type SpacingProps = S.WrapperProps & ViewProps;

export function Spacing({ size, ...props }: SpacingProps) {
  return <S.Wrapper size={size} {...props} />;
}
