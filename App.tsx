import React from 'react';

import { Provider } from '@/components';
import { Text } from 'react-native';

export default function App() {
  return (
    <Provider>
      <Text>Render</Text>
    </Provider>
  );
}
