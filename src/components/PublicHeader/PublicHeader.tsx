import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IconBack } from '@/assets/images';

import { Text } from '../Text/Text';

import * as S from './PublicHeader.styles';

type PublicHeaderProps = {
  label: string;
};

export function PublicHeader({ label }: PublicHeaderProps) {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.BackButton accessibilityLabel="Back Button" onPress={handleGoBack}>
          <IconBack />
        </S.BackButton>
        <Text.Title size="xlarge">{label}</Text.Title>
      </S.Wrapper>
    </S.Container>
  );
}
