import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './Input.styles';

export type InputProps = {
  adornment?: React.ReactElement;
  hasError?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
} & TextInputProps;

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ hasError, adornment, ...props }, ref) => {
    return (
      <S.Wrapper testID="input-wrapper" hasError={hasError}>
        <S.TextInput {...props} ref={ref} />
        {adornment}
      </S.Wrapper>
    );
  }
);
