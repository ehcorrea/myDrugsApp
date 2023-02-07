import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input, Text } from '@/components';

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

export const InputEmail = styled(Input).attrs({ label: 'Email Address' })``;

export const InputPassword = styled(Input).attrs(({ theme }) => ({
  containerStyle: { marginTop: theme.spacings.xlarge },
  label: 'Password',
  secureTextEntry: true,
}))``;

export const FogotPassword = styled(Button.Link).attrs({
  label: 'Forgot Password',
  textProps: {
    color: 'red',
    size: 'small',
  },
})`
  ${({ theme }) => css`
    align-items: flex-end;
    margin-right: ${theme.spacings.large}px;
    margin-top: ${theme.spacings.xsmall}px;
  `}
`;

export const Login = styled(Button).attrs({
  label: 'Login',
  rounded: 'medium',
})`
  ${({ theme }) => css`
    align-self: center;
    margin-top: ${theme.spacings.huge}px;
    width: 90%;
  `}
`;

export const RegisterHint = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    margin-bottom: ${theme.spacings.huge}px;
    margin-top: ${theme.spacings.medium}px;
  `}
`;

export const RegisterHere = styled(Button.Link).attrs({
  label: 'Register Here',
  textProps: {
    color: 'black',
    size: 'xsmall',
  },
})``;

export const ContainerLoginWith = styled.View`
  align-items: center;
`;

export const LoginWithText = styled(Text).attrs({
  color: 'gray',
  size: 'small',
})`
  text-align: center;
`;

export const WrapperLoginOptions = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    margin-top: ${theme.spacings.large}px;
  `}
`;

export const LoginOption = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-horizontal: ${theme.spacings.large}px;
  `}
`;
