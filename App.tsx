import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { Provider } from '@/components';
import { Routes } from '@/routes';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
