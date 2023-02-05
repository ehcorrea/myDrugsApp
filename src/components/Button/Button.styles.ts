import styled, { css } from 'styled-components/native';

import { BorderRadius } from '@/types/theme';

import { Text } from '../Text/Text';

export type ContainerProps = {
  rounded?: BorderRadius;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, rounded }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    height: ${theme.spacings.huge}px;
    justify-content: center;
    width: 222px;

    ${rounded &&
    css`
      border-radius: ${theme.border.radius[rounded]}px;
    `}
  `}
`;

export const Label = styled(Text).attrs(({ color = 'red' }) => ({
  color,
  size: 'small',
}))`
  text-transform: capitalize;
`;
