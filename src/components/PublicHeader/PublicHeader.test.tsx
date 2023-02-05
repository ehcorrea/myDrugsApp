import React from 'react';
import { fireEvent, mockedNavigation, render } from '@/test/utils';

import { PublicHeader } from './PublicHeader';

const setup = () => {
  const container = render(<PublicHeader label="Render Label" />);
  const button = container.getByLabelText('Back Button');

  return { button, ...container };
};

test('<PublicHeader/>', () => {
  const container = setup();
  expect(container.getByText('Render Label')).toBeTruthy();

  fireEvent.press(container.button);
  expect(mockedNavigation.goBack).toHaveBeenCalled();
});
