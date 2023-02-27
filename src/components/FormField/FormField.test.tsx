import React from 'react';
import { useForm } from 'react-hook-form';

import { render, renderHook } from '@/test/utils';

import { FormField } from './FormField';

test.each([
  { Component: FormField, name: 'FormField', testID: 'formField-component' },
  {
    Component: FormField.Input,
    name: 'FormFieldInput',
    testID: 'formField-input-component',
  },
  {
    Component: FormField.Password,
    name: 'FormFieldPassword',
    testID: 'formField-password-component',
  },
])('[border %s] success render Button', ({ Component, ...props }) => {
  const { result } = renderHook(() => useForm());
  const container = render(
    <Component control={result.current.control} {...props} />
  );

  expect(container.getByTestId(props.testID)).toBeTruthy();
  expect(container).toMatchSnapshot();
});
