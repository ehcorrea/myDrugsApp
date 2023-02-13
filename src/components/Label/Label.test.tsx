import React from 'react';
import { render } from '@/test/utils';

import { Label } from './Label';

test('<Label/>', () => {
  const container = render(<Label>label text</Label>);
  expect(container.getByText('label text')).toBeTruthy();
});
