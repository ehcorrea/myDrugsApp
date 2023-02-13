import React from 'react';

import * as S from './Label.styles';

export type LabelProps = {
  children?: React.ReactNode;
};

export function Label({ children }: LabelProps) {
  return <S.Label>{children}</S.Label>;
}
