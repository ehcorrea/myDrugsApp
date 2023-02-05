import { fireEvent, mockedNavigation, render } from '@/test/utils';

import { InitialScreen } from './InitialScreen';

const setup = () => {
  const container = render(<InitialScreen />);
  const button = container.getByLabelText('Get Started');

  return { button, ...container };
};

test('should render screen with success', () => {
  const container = setup();
  expect(container.getByLabelText('inicial screen banner')).toBeTruthy();

  fireEvent.press(container.button);
  expect(mockedNavigation.navigate).toHaveBeenCalledWith('LoginScreen');

  expect(container).toMatchSnapshot();
});
