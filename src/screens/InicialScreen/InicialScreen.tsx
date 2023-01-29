import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import { InitialBackground } from '@/assets/images';

import * as S from './Styles.InicialScreen';

export function InicialScreen() {
  return (
    <S.Wrapper>
      <S.Background source={InitialBackground} resizeMode="cover">
        <S.Container>
          <SafeAreaView>
            <Text>Teste</Text>
          </SafeAreaView>
        </S.Container>
      </S.Background>
    </S.Wrapper>
  );
}
