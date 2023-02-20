import React from 'react';

import {
  fireEvent,
  mockedUseControllerValues,
  render,
  renderHook,
} from '@/test/utils';

import { Form } from './Form';
import { Input, InputProps } from '../Input/Input';

import { useForm } from 'react-hook-form';

describe('<Form/>', () => {
  const setup = () => {
    const { result } = renderHook(() => useForm());

    const container = render(
      <Form<InputProps>
        name="form-input"
        control={result.current.control}
        renderComponent={Input}
        testID="input-component"
      />
    );

    const input = container.getByTestId(/input-component/i);

    return { input, result, ...container };
  };

  test('[success] should render Form', () => {
    const container = setup();

    fireEvent.changeText(container.input, 'some text');
    expect(container.input).toHaveProp('value', 'some text');
  });

  test('[error] should render Form', () => {
    mockedUseControllerValues({
      fieldState: { error: { message: 'mocked-error' } },
    });

    const container = setup();

    expect(container.getByTestId('input-wrapper')).toHaveProp('hasError', true);
  });
});
