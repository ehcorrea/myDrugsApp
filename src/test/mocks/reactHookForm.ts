import { mocked } from 'jest-mock';

const mockedFactory = (key: string) =>
  jest.fn(mocked(jest.requireActual('react-hook-form')[key]));

export const mockedReactHookForm = {
  useForm: mockedFactory('useForm'),
  useController: mockedFactory('useController'),
};
