import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { Input, InputProps } from '../Input/Input';

import * as S from './InputPassword.styles';

export const InputPassword = React.forwardRef<TextInput, InputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((prevState) => !prevState);
    };
    const adornment = showPassword ? (
      <S.PasswordEyeHide />
    ) : (
      <S.PasswordEyeShow />
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
