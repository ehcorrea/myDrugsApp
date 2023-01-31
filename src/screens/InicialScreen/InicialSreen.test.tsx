import { render } from '@/test/utils';

import { InicialScreen } from './InicialScreen';

test('should render screen with success', () => {
  const container = render(<InicialScreen />);
  expect(container.getByLabelText('inicial screen banner')).toBeTruthy();
  expect(container.getByLabelText('Get Started')).toBeTruthy();

  expect(container).toMatchSnapshot();
});
