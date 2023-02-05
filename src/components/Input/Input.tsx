import React, { useRef, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { IconPasswordEye, IconPasswordEyeHide } from '@/assets/images';

import * as S from './Input.styles';

export type InputProps = {
  label: string;
  onBlur?: () => void;
} & TextInputProps;

export function Input({ label, onBlur, ...props }: InputProps) {
  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, SetValue] = useState('');

  const inputRef = useRef<TextInput>(null);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
    setHasFocus(true);
  };

  return (
    <TouchableWithoutFeedback
      accessibilityLabel={`${label} field`}
      onPress={handleFocus}
    >
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Wrapper>
          <S.TextInput
            {...props}
            accessibilityState={{ selected: hasFocus }}
            onBlur={() => {
              onBlur?.();
              setHasFocus(false);
            }}
            onChangeText={(inputValue) => SetValue(inputValue)}
            ref={inputRef}
            secureTextEntry={props.secureTextEntry && !showPassword}
            testID={`${label.toLowerCase()} input`}
            value={value}
          />
          {props.secureTextEntry && (
            <TouchableOpacity onPress={handleShowPassword}>
              {showPassword ? (
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
              )}
            </TouchableOpacity>
          )}
        </S.Wrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
