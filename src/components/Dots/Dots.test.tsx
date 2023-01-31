import { render } from '@/test/utils';
import { Dots } from './Dots';

test.each([undefined, 1, 2, 3])('renderiza dots com %s', (value) => {
  const container = render(<Dots dots={value} />);

  expect(container).toMatchSnapshot();
});
