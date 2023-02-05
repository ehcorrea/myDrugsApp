import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    margin-top: ${theme.spacings.xxlarge}px;
    padding-horizontal: ${theme.spacings.huge}px;
    width: 100%;
  `}
`;

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  left: 0px;
  position: absolute;
`;
