import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@/components';

import * as S from './InitialScreen.styles';
import { ScrollView } from 'react-native';

export function InitialScreen() {
  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigate('LoginScreen');
  };

  return (
    <S.Container>
      <S.Header>
        <S.Banner
          accessibilityLabel="inicial screen banner"
          resizeMode="cover"
        />
      </S.Header>

      <S.SafeArea edges={['bottom']}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <S.Body>
            <S.Title>Beyond The</S.Title>
            <S.SecondTitleWrapper>
              <S.Title>Journey</S.Title>
            </S.SecondTitleWrapper>
            <S.Ornament />
          </S.Body>
        </ScrollView>
        <S.Footer>
          <Button label="Get Started" rounded="large" onPress={handleLogin} />
        </S.Footer>
      </S.SafeArea>
    </S.Container>
  );
}
