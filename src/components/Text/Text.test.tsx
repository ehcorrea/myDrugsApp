import theme from '@/config/theme';
import { render } from '@/test/utils';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from './Text';

describe('<Text/>', () => {
  test('renderiza Text com sucesso', () => {
    const container = render(<Text>Render Text</Text>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.regular,
      color: theme.colors.black,
      fontSize: RFValue(theme.font.sizes.medium),
    });
  });

  test('renderiza Title com sucesso', () => {
    const container = render(<Text.Title>Render Text</Text.Title>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.title,
    });
  });

  test('renderiza Paragraph com sucesso', () => {
    const container = render(<Text.Paragraph>Render Text</Text.Paragraph>);
    const text = container.getByText('Render Text');

    expect(text).toHaveStyle({
      fontFamily: theme.font.family.medium,
    });
  });
});
