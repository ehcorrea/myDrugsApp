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
    min-width: 222px;
    padding: ${theme.spacings.xxsmall}px;

    ${rounded &&
    css`
      border-radius: ${theme.border.radius[rounded]}px;
    `}
  `}
`;

export const Label = styled(Text).attrs((props) => ({
  props,
}))`
  text-transform: capitalize;
`;
