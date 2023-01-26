import React, { useEffect } from 'react';
import { Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import { Provider } from '@/components';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider>
      <Text>Render</Text>
    </Provider>
  );
}
