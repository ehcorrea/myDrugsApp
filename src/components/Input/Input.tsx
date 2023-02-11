import React, { useRef, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  ViewProps,
} from 'react-native';

import { IconPasswordEye, IconPasswordEyeHide } from '@/assets/images';

import * as S from './Input.styles';

export type InputProps = {
  adornment?: React.ReactElement;
  containerProps?: ViewProps;
  label: string;
  onBlur?: () => void;
  error?: string;
} & TextInputProps;

export function Input({
  adornment,
  containerProps,
  label,
  onBlur,
  error,
  ...props
}: InputProps) {
  const [hasFocus, setHasFocus] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const hasError = !!error;

  const handleFocus = () => {
    setHasFocus(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setHasFocus(false);
    onBlur?.();
  };

  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <S.Container {...containerProps}>
        <S.Label>{label}</S.Label>
        <S.Wrapper testID="input-wrapper" hasError={hasError}>
          <S.TextInput
            {...props}
            accessibilityState={{ selected: hasFocus }}
            onBlur={handleOnBlur}
            ref={inputRef}
          />
          {adornment}
        </S.Wrapper>
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export type InputPasswordProps = InputProps;

Input.Password = function Password(props: InputPasswordProps) {
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
      secureTextEntry={!showPassword}
      adornment={
        <S.ShowPassword onPress={handleShowPassword}>
          {adornment}
        </S.ShowPassword>
      }
    />
  );
};
