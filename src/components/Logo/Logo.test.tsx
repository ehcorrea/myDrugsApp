import { render } from '@/test/utils';
import { LogoProps, Logo } from './Logo';

const setup = (props: LogoProps) => render(<Logo {...props} />);

describe('<Logo/>', () => {
  const DEFAULT_PROPS_VALUE: LogoProps = {};

  test.each([
    DEFAULT_PROPS_VALUE,
    { color: 'white', size: 'large', hideText: false },
    { color: 'white', size: 'normal', hideText: false },
    { color: 'black', size: 'large', hideText: false },
  ])('[com texto] renderiza com sucesso %s', (props) => {
    const container = setup(props as LogoProps);

    const color = props.color || 'black';
    const image = container.getByTestId('logo-svg');

    expect(image).toHaveProp('vbWidth', 300);
    expect(image).toHaveProp('vbHeight', 150);
    expect(image).toHaveProp('color', color);

    expect(container).toMatchSnapshot();
  });

  test.each([
    { color: 'black', size: 'normal', hideText: true },
    { color: 'black', size: 'large', hideText: true },
  ])('[sem texto] renderiza com sucesso %s', (props) => {
    const container = setup(props as LogoProps);

    const image = container.getByTestId('logo-svg');
    expect(image).toHaveProp('vbWidth', 135);
    expect(image).toHaveProp('color', props.color);

    expect(container).toMatchSnapshot();
  });
});
