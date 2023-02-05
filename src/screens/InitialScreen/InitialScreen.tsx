import React from 'react';

import { Button } from '@/components';

import * as S from './InitialScreen.styles';
import { useNavigation } from '@react-navigation/native';

export function InitialScreen() {
  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigate('LoginScreen');
  };

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
        <Button label="Get Started" rounded="large" onPress={handleLogin} />
      </S.Footer>
    </S.Container>
  );
}
