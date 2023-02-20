import React, { createRef, RefObject } from 'react';
import { TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input, InputProps } from '@/components';
import { fireEvent, render, renderHook } from '@/test/utils';

import { useFormField } from './useFormField';

const spyHandlePressLabel = jest.fn();

const setup = (inputRef?: RefObject<TextInput>) => {
  const {
    result: {
      current: { Field },
    },
  } = renderHook(() => useFormField<InputProps>());

  const {
    result: {
      current: { control },
    },
  } = renderHook(() => useForm());

  const container = render(
    <Field
      control={control}
      label="Form Input"
      name="form-input"
      renderComponent={Input}
      handlePressLabel={spyHandlePressLabel}
      testID="input-component"
    />
  );

  const input = container.getByTestId(/input-component/i);
  const label = container.getByText('Form Input');

  return { input, label, inputRef, ...container };
};

test('render useFormField', () => {
  const inputRef = createRef<TextInput>();
  const container = setup(inputRef);

  fireEvent.press(container.label);
  expect(spyHandlePressLabel).toHaveBeenCalled();
});
