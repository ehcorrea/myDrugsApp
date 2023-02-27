import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Text } from '@/components';

export const SafeArea = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${theme.spacings.medium}px;
  `}
`;

export const Scroll = styled.ScrollView.attrs({ bounces: false })`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    flex: 1;
    padding-horizontal: ${theme.spacings.huge}px;
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.large}px;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large * 3}px;
  `}
`;

export const Title = styled(Text.Title).attrs({ size: 'huge' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall}px;
    margin-left: ${theme.spacings.xsmall}px;
  `}
`;

export const Subtitle = styled(Text).attrs({ size: 'small' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge}px;
  `}
`;

export const Register = styled(Button).attrs({
  label: 'Register',
  rounded: 'medium',
})`
  ${({ theme }) => css`
    align-self: center;
    margin-top: ${theme.spacings.huge}px;
    width: 90%;
  `}
`;
