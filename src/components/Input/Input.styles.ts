import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Text } from '../Text/Text';

export const Container = styled.View``;

export const Label = styled(Text.Title)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium}px;
    margin-bottom: ${theme.spacings.xxsmall}px;
    margin-left: ${theme.spacings.large}px;
  `}
`;

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.medium}px;
    border: solid 1px ${theme.colors.black};
    flex-direction: row;
    padding-horizontal: ${theme.spacings.large}px;
    padding-vertical: ${theme.spacings.xsmall}px;
  `}
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  autoCapitalize: 'none',
  autoCorrect: false,
  ...props,
}))`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    flex: 1;
    font-family: ${theme.font.family.regular};
    font-size: ${RFValue(theme.font.sizes.small)}px;
  `}
`;
