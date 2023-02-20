import { RefAttributes } from 'react';
import { TextInput } from 'react-native';
import { ControllerRenderProps } from 'react-hook-form';

export type FormComponentProps = {
  hasError: boolean;
  onChangeText: ControllerRenderProps['onChange'];
} & Pick<ControllerRenderProps, 'value'> &
  RefAttributes<TextInput>;
