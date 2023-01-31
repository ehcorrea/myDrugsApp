import styled, { css } from 'styled-components/native';

import { BorderRadius } from '@/types/theme';

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
