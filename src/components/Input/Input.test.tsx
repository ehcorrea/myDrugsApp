import React from 'react';
import { View } from 'react-native';

import { act, fireEvent, render } from '@/test/utils';
import theme from '@/config/theme';

import { Input } from './Input';

const spyOnChange = jest.fn();
const spyOnBlur = jest.fn();
const spyOnFocus = jest.fn();

const setup = (hasError?: boolean) => {
  const container = render(
    <Input
      hasError={hasError}
      onChangeText={spyOnChange}
      onBlur={spyOnBlur}
      onFocus={spyOnFocus}
      adornment={<View testID="input-adornment" />}
      testID="input-component"
    />
  );
  const wrapper = container.getByTestId(/input-wrapper/i);
  const input = container.getByTestId(/input-component/i);
  const adornment = container.getByTestId(/input-adornment/i);

  return { wrapper, input, adornment, ...container };
};

test('[success] should render Input', () => {
  const container = setup();

  fireEvent.changeText(container.input, 'write a text');
  expect(spyOnChange).toHaveBeenCalledWith('write a text');

  expect(container.wrapper).toHaveStyle({
    borderColor: theme.colors.black,
  });

  expect(container.adornment).toBeTruthy();

  act(() => {
    container.input.props.onFocus?.();
  });

  expect(spyOnFocus).toHaveBeenCalled();

  act(() => {
    container.input.props.onBlur?.();
  });

  expect(spyOnBlur).toHaveBeenCalled();
});

test('[error] should render Input', () => {
  const container = setup(true);

  expect(container.wrapper).toHaveStyle({
    borderColor: theme.colors.red,
  });
});
