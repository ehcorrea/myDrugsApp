import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Color, FontFamily, FontSize } from '@/types/theme';

export type TextStyleProps = {
  size?: FontSize;
  color?: Color;
  fontFamily?: FontFamily;
};

export const Text = styled.Text<TextStyleProps>`
  ${({
    theme,
    size = 'medium',
    color = 'white',
    fontFamily = 'regular',
  }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font.family[fontFamily]};
    font-size: ${RFValue(theme.font.sizes[size])}px;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
  `}
`;

export const Paragraph = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.medium};
  `}
`;
