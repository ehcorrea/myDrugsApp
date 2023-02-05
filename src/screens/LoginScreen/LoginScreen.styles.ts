import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    flex: 1;
  `}
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;
