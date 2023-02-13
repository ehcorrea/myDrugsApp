import React from 'react';
import { View } from 'react-native';

import { act, fireEvent, render } from '@/test/utils';
import theme from '@/config/theme';

import { TextField } from './TextField';

describe('<TextField/>', () => {
  const spyOnChange = jest.fn();

  const setup = (hasError?: boolean) => {
    const container = render(
      <TextField
        hasError={hasError}
        onChangeText={spyOnChange}
        testID="textfield-component"
      />
    );
    const wrapper = container.getByTestId(/input-wrapper/i);
    const input = container.getByTestId(/textfield-component/i);

    return { wrapper, input, ...container };
  };

  test('[success] should render TextField', () => {
    const container = setup();

    fireEvent.changeText(container.input, 'write a text');
    expect(spyOnChange).toHaveBeenCalledWith('write a text');

    expect(container.wrapper).toHaveStyle({
      borderColor: theme.colors.black,
    });
  });

  test('[error] should render TextField', () => {
    const container = setup(true);

    expect(container.wrapper).toHaveStyle({
      borderColor: theme.colors.red,
    });
  });
});

describe('<TextField.Input/>', () => {
  const spyOnBlur = jest.fn();
  const spyOnFocus = jest.fn();

  const setup = () => {
    const container = render(
      <TextField.Input
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

  test('should render TextField.Input', () => {
    const container = setup();

    expect(container.input).toHaveAccessibilityState({ selected: false });
    expect(container.adornment).toBeTruthy();

    act(() => {
      container.input.props.onFocus?.();
    });

    expect(spyOnFocus).toHaveBeenCalled();
    expect(container.input).toHaveAccessibilityState({ selected: true });

    act(() => {
      container.input.props.onBlur?.();
    });

    expect(spyOnBlur).toHaveBeenCalled();
    expect(container.input).toHaveAccessibilityState({ selected: false });
  });
});

describe('<TextField.Password/>', () => {
  const setup = () => {
    const container = render(
      <TextField.Password testID="password-input-component" />
    );

    const input = container.getByTestId(/password-input-component/i);

    return { input, ...container };
  };

  test('should render TextField.Password', () => {
    const container = setup();

    expect(container.input).toHaveProp('secureTextEntry', true);

    const showPasswordButton = container.getByLabelText('show password');
    fireEvent.press(showPasswordButton);
    expect(container.input).toHaveProp('secureTextEntry', false);

    const hidePasswordButton = container.getByLabelText('hide password');
    fireEvent.press(hidePasswordButton);
    expect(container.input).toHaveProp('secureTextEntry', true);
  });
});
