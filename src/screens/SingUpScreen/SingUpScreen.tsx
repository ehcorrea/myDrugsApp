import React from 'react';
import { View } from 'react-native';

import { PublicHeader } from '@/components';

import * as S from './SingUpScreen.styles';

export function SingUpScreen() {
  return (
    <S.SafeArea>
      <PublicHeader label="Sing Up" />
      <S.Scroll>
        <S.Container>
          <S.Header>
            <S.Title>Welcome</S.Title>
            <S.Subtitle>Please enter your details below</S.Subtitle>
          </S.Header>

          <View>
            <S.InputEmail />
            <S.InputPassword label="Password" />
            <S.InputPassword label="Repeat Password" />
            <S.Register />
          </View>
        </S.Container>
      </S.Scroll>
    </S.SafeArea>
  );
}
