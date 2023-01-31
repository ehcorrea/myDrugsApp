import React from 'react';

import * as S from './Dots.styles';

export type DotsProps = {
  dots?: number;
};

export function Dots({ dots = 3, ...props }: DotsProps) {
  return (
    <S.Container {...props}>
      <S.Bar />
      {Array(dots)
        .fill(0)
        .map((_, index) => (
          <S.Dot key={_ + index} />
        ))}
    </S.Container>
  );
}
