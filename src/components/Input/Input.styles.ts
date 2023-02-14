import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type WrapperProps = {
  hasError?: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, hasError }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.medium}px;
    border: solid 1px ${theme.colors.black};
    flex-direction: row;

    ${hasError &&
    css`
      border-color: ${theme.colors.red};
    `}
  `}
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  autoCapitalize: 'none',
  autoCorrect: false,
  ...props,
}))`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium}px;
    color: ${theme.colors.black};
    flex: 1;
    font-family: ${theme.font.family.regular};
    font-size: ${RFValue(theme.font.sizes.small)}px;
    padding-horizontal: ${theme.spacings.large}px;
    padding-vertical: ${theme.spacings.xsmall}px;
  `}
`;

export const ShowPassword = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-self: center;
    margin-right: ${theme.spacings.large}px;
  `}
`;
