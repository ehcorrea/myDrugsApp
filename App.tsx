import React from 'react';
import { Text } from 'react-native';

import { Provider } from '@/components';

export default function App() {
  return (
    <Provider>
      <Text>Render</Text>
    </Provider>
  );
}
