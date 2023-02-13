import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { IconPasswordEye, IconPasswordEyeHide } from '@/assets/images';

import * as S from './Input.styles';

export type InputProps = {
  adornment?: React.ReactElement;
  hasError?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
} & TextInputProps;

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ adornment, onFocus, hasError, onBlur, ...props }, ref) => {
    const [hasFocus, setHasFocus] = useState(false);

    const handleOnFocus = () => {
      setHasFocus(true);
      onFocus?.();
    };

    const handleOnBlur = () => {
      setHasFocus(false);
      onBlur?.();
    };

    return (
      <S.Wrapper testID="input-wrapper" hasError={hasError}>
        <S.TextInput
          {...props}
          accessibilityState={{ selected: hasFocus }}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          ref={ref}
        />
        {adornment}
      </S.Wrapper>
    );
  }
);

export const InputPassword = React.forwardRef<TextInput, InputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((prevState) => !prevState);
    };
    const adornment = showPassword ? (
      <IconPasswordEyeHide
        accessibilityLabel="hide password"
        height={23}
        width={28}
      />
    ) : (
      <IconPasswordEye
        accessibilityLabel="show password"
        height={23}
        width={28}
      />
    );

    return (
      <Input
        {...props}
        adornment={
          <S.ShowPassword onPress={handleShowPassword}>
            {adornment}
          </S.ShowPassword>
        }
        ref={ref}
        secureTextEntry={!showPassword}
      />
    );
  }
);
