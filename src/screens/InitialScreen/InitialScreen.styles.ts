import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InitialBackground } from '@/assets/images';
import { Dots, Text } from '@/components';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    flex: 1;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    border-bottom-left-radius: ${theme.border.radius.large}px;
    border-bottom-right-radius: ${theme.border.radius.large}px;
    flex: 2;
  `}
`;

export const Banner = styled.ImageBackground.attrs({
  source: InitialBackground,
})`
  flex: 1;
`;

export const SafeArea = styled(SafeAreaView).attrs({ edges: ['bottom'] })`
  ${({ theme }) => css`
    flex: 1;
    padding-bottom: ${theme.spacings.large}px;
  `}
`;

export const Body = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled(Text.Title).attrs({
  color: 'black',
  size: 'huge',
})``;

export const SecondTitleWrapper = styled.View`
  ${({ theme }) =>
    css`
      margin-top: -2%;
      padding-left: ${theme.spacings.xxlarge * 5.5}px;
    `}
`;

export const Ornament = styled(Dots)`
  ${({ theme }) =>
    css`
      margin-top: ${theme.spacings.xxlarge}px;
    `}
`;

export const Footer = styled.View`
  ${({ theme }) =>
    css`
      align-items: center;
      margin-top: ${theme.spacings.medium}px;
    `}
`;
