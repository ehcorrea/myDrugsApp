import React from 'react';
import { View } from 'react-native';

import { Text, PublicHeader } from '@/components';

import {
  IconLoginApple,
  IconLoginFacebook,
  IconLoginGoogle,
} from '@/assets/images';

import * as S from './LoginScreen.styles';

export function LoginScreen() {
  return (
    <S.SafeArea>
      <PublicHeader label="Login" />
      <S.Scroll>
        <S.Container>
          <S.Header>
            <S.Title>Welcome</S.Title>
            <S.Subtitle>Happy to see you. Please Login Here</S.Subtitle>
          </S.Header>

          <View>
            <S.InputEmail />
            <S.InputPassword />
            <S.FogotPassword />
            <S.Login />

            <S.RegisterHint>
              <Text size="xsmall" color="gray">
                Don't have an account?{' '}
              </Text>
              <S.RegisterHere />
            </S.RegisterHint>
          </View>

          <S.ContainerLoginWith>
            <S.LoginWithText>Or Login with</S.LoginWithText>
            <S.WrapperLoginOptions>
              <S.LoginOption>
                <IconLoginGoogle />
              </S.LoginOption>
              <S.LoginOption>
                <IconLoginApple />
              </S.LoginOption>
              <S.LoginOption>
                <IconLoginFacebook />
              </S.LoginOption>
            </S.WrapperLoginOptions>
          </S.ContainerLoginWith>
        </S.Container>
      </S.Scroll>
    </S.SafeArea>
  );
}
