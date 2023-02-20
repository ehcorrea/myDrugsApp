import { mockedNavigation, mockedReactHookForm } from '../src/test/mocks';

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return {
    ...navigation,
    useNavigation: jest.fn(() => mockedNavigation),
  };
});

jest.mock('react-hook-form', () => mockedReactHookForm);
