import styled, { css } from 'styled-components/native';

import { InitialBackground } from '@/assets/images';
import { Dots, Text } from '@/components';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.mainBg};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    border-bottom-left-radius: ${theme.border.radius.large}px;
    border-bottom-right-radius: ${theme.border.radius.large}px;
    flex: 5;
    overflow: hidden;
  `}
`;

export const Banner = styled.ImageBackground.attrs({
  source: InitialBackground,
})`
  flex: 1;
`;

export const Body = styled.View`
  ${({ theme }) => css`
    align-items: center;
    flex: 2;
    justify-content: flex-start;
    margin-top: ${theme.spacings.xlarge}px;
  `}
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
  align-items: center;
  flex: 1;
`;
