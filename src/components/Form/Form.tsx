import { FormComponentProps } from '@/types/form';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export type FormProps<RenderComponentProps> = {
  renderComponent: React.FC<Partial<FormComponentProps>>;
  control: Control;
  name: string;
} & RenderComponentProps;

export function Form<RenderComponentProps>({
  control,
  name,
  renderComponent: RenderComponent,
  ...props
}: FormProps<RenderComponentProps>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <RenderComponent
      {...props}
      hasError={!!fieldState.error?.message}
      onChangeText={field.onChange}
      value={field.value}
    />
  );
}
