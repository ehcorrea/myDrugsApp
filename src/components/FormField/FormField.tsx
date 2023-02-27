import React from 'react';
import { TextInput } from 'react-native';

import { useFormField, UseFormFieldProps } from '@/hooks';

import { Input, InputProps } from '../Input/Input';

export type FormFieldProps<T> = Omit<UseFormFieldProps<T>, 'renderComponent'>;

export function FormField(props: FormFieldProps<InputProps>) {
  const { Field } = useFormField();
  return <Field {...props} renderComponent={Input} />;
}

FormField.Input = React.forwardRef<TextInput, FormFieldProps<InputProps>>(
  (props, ref) => {
    const { Field } = useFormField();
    return <Field {...props} ref={ref} renderComponent={Input} />;
  }
);
