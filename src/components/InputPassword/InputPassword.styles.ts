import styled, { css } from 'styled-components/native';

import { IconPasswordEye, IconPasswordEyeHide } from '@/assets/images';

export const ShowPassword = styled.TouchableOpacity`
  ${({ theme }) => css`
    align-self: center;
    margin-right: ${theme.spacings.medium}px;
  `}
`;

export const PasswordEyeHide = styled(IconPasswordEye).attrs({
  accessibilityLabel: 'hide password',
  height: 23,
  width: 28,
})``;

export const PasswordEyeShow = styled(IconPasswordEyeHide).attrs({
  accessibilityLabel: 'show password',
  height: 23,
  width: 28,
})``;
