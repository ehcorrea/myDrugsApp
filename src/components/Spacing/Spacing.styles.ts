import styled, { css } from 'styled-components/native';
import { SpacingsZize } from '@/types/theme';

export type WrapperProps = {
  size?: SpacingsZize;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, size = 'medium' }) => css`
    height: ${theme.spacings[size]}px;
  `}
`;
