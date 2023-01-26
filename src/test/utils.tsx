import React from 'react';
import '@testing-library/jest-native';

import {
  render as renderUI,
  RenderOptions,
  RenderAPI,
} from '@testing-library/react-native';

export * from '@testing-library/react-native';

import { Provider } from '@/components';

export const render = (
  component: React.ReactElement<any>,
  options?: RenderOptions
): RenderAPI => {
  return renderUI(component, {
    wrapper: Provider,
    ...options,
  });
};
