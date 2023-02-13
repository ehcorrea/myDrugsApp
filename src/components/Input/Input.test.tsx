import React from 'react';
import { View } from 'react-native';

import { act, fireEvent, render } from '@/test/utils';
import theme from '@/config/theme';

import { Input, InputPassword } from './Input';

const spyOnBlur = jest.fn();
const spyOnFocus = jest.fn();
const spyOnChange = jest.fn();

test('should render text input', () => {
  const container = render(
    <Input
      adornment={<View testID="input-adornment" />}
      onBlur={spyOnBlur}
      onChangeText={spyOnChange}
      onFocus={spyOnFocus}
      testID="input-component"
    />
  );

  const input = container.getByTestId(/input-component/i);

  expect(input).toHaveAccessibilityState({ selected: false });
  expect(container.getByTestId('input-adornment')).toBeTruthy();

  act(() => {
    input.props.onFocus?.();
  });

  expect(spyOnFocus).toHaveBeenCalled();
  expect(input).toHaveAccessibilityState({ selected: true });

  fireEvent.changeText(input, 'write a text');
  expect(spyOnChange).toHaveBeenCalledWith('write a text');

  act(() => {
    input.props.onBlur?.();
  });

  expect(spyOnBlur).toHaveBeenCalled();
  expect(input).toHaveAccessibilityState({ selected: false });
});

test('should render input with error', () => {
  const container = render(<Input hasError />);

  expect(container.getByTestId(/input-wrapper/i)).toHaveStyle({
    borderColor: theme.colors.red,
  });
});

test('should render secure text input', () => {
  const container = render(<InputPassword testID="input-password-component" />);

  const input = container.getByTestId(/input-password-component/i);
  expect(input).toHaveProp('secureTextEntry', true);

  const showPasswordButton = container.getByLabelText('show password');
  fireEvent.press(showPasswordButton);
  expect(input).toHaveProp('secureTextEntry', false);

  const hidePasswordButton = container.getByLabelText('hide password');
  fireEvent.press(hidePasswordButton);
  expect(input).toHaveProp('secureTextEntry', true);
});
