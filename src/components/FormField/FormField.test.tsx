import React from 'react';
import { useForm } from 'react-hook-form';

import { fireEvent, render, renderHook } from '@/test/utils';

import { FormField } from './FormField';

describe('<FormField/>', () => {
  const setup = () => {
    const { result } = renderHook(() => useForm());

    const container = render(
      <FormField
        control={result.current.control}
        name="FormField"
        testID="formField-component"
      />
    );

    const input = container.getByTestId(/formField-component/i);

    return { input, ...container };
  };

  test('should render component', () => {
    const container = setup();

    fireEvent.changeText(container.input, 'some text');
    expect(container.input).toHaveProp('value', 'some text');
  });
});

describe('<FormField.Input/>', () => {
  const setup = () => {
    const { result } = renderHook(() => useForm());

    const container = render(
      <FormField.Input
        control={result.current.control}
        name="FormFieldInput"
        testID="formField-input-component"
      />
    );

    const input = container.getByTestId(/formField-input-component/i);

    return { input, ...container };
  };

  test('should render component', () => {
    const container = setup();

    fireEvent.changeText(container.input, 'some text');
    expect(container.input).toHaveProp('value', 'some text');
  });
});
