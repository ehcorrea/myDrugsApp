import React from 'react';
import { act, fireEvent, render } from '@/test/utils';

import { Input, InputProps } from './Input';

const spy = jest.fn();

const setup = (props?: Partial<InputProps>) => {
  const container = render(
    <Input label="Render Label" onBlur={spy} {...props} />
  );

  const wrapper = container.getByLabelText('Render Label field');
  const label = container.getByText('Render Label');
  const input = container.getByTestId('render label input');
  return { wrapper, label, input, ...container };
};

describe('<Input/>', () => {
  test('should render text input with success', async () => {
    const container = setup();

    fireEvent.press(container.wrapper);
    expect(container.input).toHaveAccessibilityState({ selected: true });

    expect(container.queryByLabelText('show password')).toBeFalsy();
    expect(container.queryByLabelText('hide password')).toBeFalsy();

    fireEvent.changeText(container.input, 'write a text');
    expect(container.input.props.value).toBe('write a text');

    act(() => {
      container.input.props.onBlur?.();
    });

    expect(spy).toHaveBeenCalled();
    expect(container.input).toHaveAccessibilityState({ selected: false });
  });

  test('should render secure text input with success', async () => {
    const container = setup({ secureTextEntry: true });

    fireEvent.press(container.label);
    expect(container.input).toHaveAccessibilityState({ selected: true });
    expect(container.input).toHaveProp('secureTextEntry', true);

    const showPasswordButton = container.getByLabelText('show password');
    fireEvent.press(showPasswordButton);
    expect(container.input).toHaveProp('secureTextEntry', false);

    const hidePasswordButton = container.getByLabelText('hide password');
    fireEvent.press(hidePasswordButton);
    expect(container.input).toHaveProp('secureTextEntry', true);
  });
});
