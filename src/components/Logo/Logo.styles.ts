import styled, { css } from 'styled-components/native';
import { Svg as StyledSvg } from 'react-native-svg';

export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
  hideText?: boolean;
};

const wrapperModifiers = {
  normal: ({ hideText }: LogoProps) => css`
    width: 130px;
    height: 55px;

    ${hideText &&
    css`
      width: 55px;
    `}
  `,

  large: ({ hideText }: LogoProps) => css`
    width: 175px;
    height: 95px;

    ${hideText &&
    css`
      width: 95px;
    `}
  `,
};

export const Svg = styled(StyledSvg)<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`;

export const Wrapper = styled.View<LogoProps>`
  ${({ size, hideText }) => css`
    ${wrapperModifiers[size!]({ hideText })}
  `}
`;
