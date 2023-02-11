import React from 'react';
import { Text } from 'react-native';

import { act, fireEvent, render } from '@/test/utils';

import { Input } from './Input';

const spyOnBlur = jest.fn();
const spyOnChange = jest.fn();

test('should render text input with success', async () => {
  const container = render(
    <Input
      adornment={<Text>text adornment</Text>}
      containerProps={{ testID: 'wrapper', style: { marginTop: 10 } }}
      label="Input Component"
      onBlur={spyOnBlur}
      onChangeText={spyOnChange}
      testID="input component"
    />
  );

  const wrapper = container.getByTestId(/wrapper/i);
  const input = container.getByTestId(/input component/i);

  expect(container.getByText('Input Component')).toBeTruthy();
  expect(container.getByText('text adornment')).toBeTruthy();
  expect(wrapper).toHaveStyle({ marginTop: 10 });

  fireEvent.press(wrapper);
  expect(input).toHaveAccessibilityState({ selected: true });

  fireEvent.changeText(input, 'write a text');
  expect(spyOnChange).toHaveBeenCalledWith('write a text');

  act(() => {
    input.props.onBlur?.();
  });

  expect(spyOnBlur).toHaveBeenCalled();
  expect(input).toHaveAccessibilityState({ selected: false });
});

test('should render secure text input with success', async () => {
  const container = render(
    <Input.Password
      label="Input Password Component"
      testID="input password component"
    />
  );

  const input = container.getByTestId(/input password component/i);
  expect(input).toHaveProp('secureTextEntry', true);

  const showPasswordButton = container.getByLabelText('show password');
  fireEvent.press(showPasswordButton);
  expect(input).toHaveProp('secureTextEntry', false);

  const hidePasswordButton = container.getByLabelText('hide password');
  fireEvent.press(hidePasswordButton);
  expect(input).toHaveProp('secureTextEntry', true);
});
