import React from 'react';
import { fireEvent, render } from '@/test/utils';

import { InputPassword } from './InputPassword';

test('should render InputPassword', async () => {
  const container = render(<InputPassword testID="input password component" />);

  const input = container.getByTestId(/input password component/i);
  expect(input).toHaveProp('secureTextEntry', true);

  const showPasswordButton = container.getByLabelText('show password');
  fireEvent.press(showPasswordButton);
  expect(input).toHaveProp('secureTextEntry', false);

  const hidePasswordButton = container.getByLabelText('hide password');
  fireEvent.press(hidePasswordButton);
  expect(input).toHaveProp('secureTextEntry', true);
});
