import { Text } from 'react-native';

import { fireEvent, render } from '@/test/utils';
import { BorderRadius } from '@/types/theme';
import theme from '@/config/theme';

import { Button } from './Button';

const onPress = jest.fn();

test('[label] success render Button', () => {
  const container = render(<Button onPress={onPress} label="button label" />);
  const button = container.getByText('button label');

  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();

  expect(container).toMatchSnapshot();
});

test('[children] success render Button', () => {
  const container = render(
    <Button onPress={onPress}>
      <Text>button label</Text>
    </Button>
  );
  const button = container.getByText('button label');

  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();

  expect(container).toMatchSnapshot();
});

test.each(Object.keys(theme.border.radius))(
  '[border %s] success render Button',
  (value) => {
    const border = value as BorderRadius;
    const container = render(<Button label="button label" rounded={border} />);

    const button = container.getByLabelText('button label');
    expect(button).toHaveStyle({ borderRadius: theme.border.radius[border] });

    expect(container).toMatchSnapshot();
  }
);

test('should success render Button.Link', () => {
  const container = render(
    <Button.Link label="button label" onPress={onPress} color="black" />
  );
  const button = container.getByText('button label');
  expect(button).toHaveStyle({ color: theme.colors.black });

  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();

  expect(container).toMatchSnapshot();
});
