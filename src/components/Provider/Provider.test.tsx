import { Button } from 'react-native';
import { render } from '@testing-library/react-native';

import { fireEvent } from '@/test/utils';
import { Provider } from './Provider';

const spy = jest.fn();

describe('<Provider/>', () => {
  test('Renderiza children', () => {
    const container = render(
      <Provider>
        <Button onPress={spy} title="Button" testID="ChildrenBtn" />
      </Provider>
    );

    const button = container.getByTestId('ChildrenBtn');
    fireEvent.press(button);

    expect(spy).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
});
