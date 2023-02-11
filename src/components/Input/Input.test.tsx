import React from 'react';
import { act, fireEvent, render } from '@/test/utils';

import { Input, InputProps } from './Input';

const spyOnBlur = jest.fn();
const spyOnChange = jest.fn();

const setup = (props?: Partial<InputProps>) => {
  const container = render(
    <Input
      label="Render Label"
      onBlur={spyOnBlur}
      onChangeText={spyOnChange}
      {...props}
    />
  );

  const wrapper = container.getByLabelText('Render Label field');
  const style = container.getByTestId('container-styled');
  const label = container.getByText('Render Label');
  const input = container.getByTestId('render label input');
  return { wrapper, style, label, input, ...container };
};

describe('<Input/>', () => {
  test('should render text input with success', async () => {
    const container = setup({ containerStyle: { marginTop: 10 } });
    expect(container.style).toHaveStyle({ marginTop: 10 });

    fireEvent.press(container.wrapper);
    expect(container.input).toHaveAccessibilityState({ selected: true });

    expect(container.queryByLabelText('show password')).toBeFalsy();
    expect(container.queryByLabelText('hide password')).toBeFalsy();

    fireEvent.changeText(container.input, 'write a text');
    expect(spyOnChange).toHaveBeenCalledWith('write a text');
    expect(container.input.props.value).toBe('write a text');

    act(() => {
      container.input.props.onBlur?.();
    });

    expect(spyOnBlur).toHaveBeenCalled();
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
