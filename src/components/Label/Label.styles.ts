import styled, { css } from 'styled-components/native';

import { Text } from '../Text/Text';

export const Label = styled(Text.Title).attrs({ size: 'medium' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall}px;
    margin-left: ${theme.spacings.large}px;
  `}
`;
