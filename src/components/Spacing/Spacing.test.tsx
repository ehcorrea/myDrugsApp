import React from 'react';
import { render } from '@/test/utils';

import { Spacing } from './Spacing';
import theme from '@/config/theme';
import { SpacingsZize } from '@/types/theme';

const setup = (size?: SpacingsZize) => {
  const container = render(<Spacing testID="spacing-component" size={size} />);
  const component = container.getByTestId(/spacing-component/i);

  return component;
};

test.each(Object.keys(theme.spacings) as SpacingsZize[])(
  '[size %s] success render Component',
  (value) => {
    const container = setup(value);
    expect(container).toHaveStyle({ height: theme.spacings[value] });
  }
);
