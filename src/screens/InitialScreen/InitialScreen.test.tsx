import { render } from '@/test/utils';

import { InitialScreen } from './InitialScreen';

test('should render screen with success', () => {
  const container = render(<InitialScreen />);
  expect(container.getByLabelText('inicial screen banner')).toBeTruthy();
  expect(container.getByLabelText('Get Started')).toBeTruthy();
});
