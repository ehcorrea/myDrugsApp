import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '@/config/theme';

type ProviderProps = {
  children: React.ReactElement;
};

export function Provider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
