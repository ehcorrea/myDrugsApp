import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Bar = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border-radius: ${theme.border.radius.medium}px;
    height: ${theme.spacings.xxsmall}px;
    width: ${theme.spacings.large}px;
  `}
`;

export const Dot = styled(Bar)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    height: ${theme.spacings.xxsmall}px;
    margin-left: ${theme.spacings.xxsmall / 4}px;
    width: ${theme.spacings.xxsmall}px;
  `}
`;
