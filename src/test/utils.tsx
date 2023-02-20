import React from 'react';
import '@testing-library/jest-native';
import {
  DeepPartial,
  useController,
  UseControllerReturn,
} from 'react-hook-form';

export * from '@testing-library/react-native';

import {
  render as renderUI,
  RenderOptions,
  RenderAPI,
} from '@testing-library/react-native';
import { mocked } from 'jest-mock';

import { Provider } from '@/components';

export * from './mocks';

export const render = (
  component: React.ReactElement<any>,
  options?: RenderOptions
): RenderAPI => {
  return renderUI(component, {
    wrapper: Provider,
    ...options,
  });
};

export const mockedUseControllerValues = (
  values?: DeepPartial<UseControllerReturn<{ key: string }, 'key'>>
) => {
  mocked(useController).mockImplementation(
    () =>
      ({
        fieldState: {},
        field: {},
        formState: {},
        ...values,
      } as any)
  );
};
