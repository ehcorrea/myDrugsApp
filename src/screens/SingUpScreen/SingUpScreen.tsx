import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { FormField, PublicHeader, Spacing } from '@/components';

import * as S from './SingUpScreen.styles';

export function SingUpScreen() {
  const { control } = useForm();

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
            <FormField.Input
              control={control}
              name="email"
              label="Email Address"
            />
            <Spacing />
            <FormField.Input
              control={control}
              name="email-repeat"
              label="Repeat Email Address"
            />
            <Spacing size="xlarge" />
            <FormField.Password
              control={control}
              name="password"
              label="Password"
            />
            <Spacing />
            <FormField.Password
              control={control}
              name="password-repeat"
              label="Repeat Password"
            />
          </View>
          <S.Register />
        </S.Container>
      </S.Scroll>
    </S.SafeArea>
  );
}
