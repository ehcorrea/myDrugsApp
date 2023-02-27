import React from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Label } from '@/components/Label/Label';
import { Form, FormProps } from '@/components/Form/Form';

export type UseFormFieldProps<RenderComponentProps> = {
  label?: string;
  handlePressLabel?: () => void;
} & FormProps<RenderComponentProps>;

export function useFormField<RenderComponentProps>() {
  const field = React.forwardRef<
    TextInput,
    UseFormFieldProps<RenderComponentProps>
  >(
    (
      {
        control,
        name,
        label,
        renderComponent: Component,
        handlePressLabel,
        ...props
      },
      ref
    ) => {
      return (
        <TouchableWithoutFeedback onPress={handlePressLabel}>
          <View>
            <Label>{label}</Label>
            <Form
              {...props}
              control={control}
              name={name}
              renderComponent={(renderProps) => (
                <Component {...renderProps} ref={ref} />
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      );
    }
  );

  return { Field: field };
}
