import React from 'react';

import { Button } from '@/components';

import * as S from './InicialScreen.styles';

export function InicialScreen() {
  return (
    <S.Container>
      <S.Header>
        <S.Banner accessibilityLabel="inicial screen banner" />
      </S.Header>

      <S.Body>
        <S.Title>Beyond The</S.Title>
        <S.SecondTitleWrapper>
          <S.Title>Journey</S.Title>
        </S.SecondTitleWrapper>
        <S.Ornament />
      </S.Body>

      <S.Footer>
        <Button label="Get Started" rounded="large" />
      </S.Footer>
    </S.Container>
  );
}
