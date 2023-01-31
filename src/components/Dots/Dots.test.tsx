import { render } from '@/test/utils';
import { Dots } from './Dots';

test.each([undefined, 1, 2, 3])('render dots with %s', (value) => {
  const container = render(<Dots dots={value} />);

  expect(container).toMatchSnapshot();
});
