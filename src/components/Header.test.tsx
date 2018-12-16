import * as React from 'react';
import { Header } from './Header';
import * as enzyme from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders the correct comp', () => {
  const app = enzyme.shallow(<Header />);
  expect(app.find('.header__title')).toBeDefined();
});

it('renders the correct comp value', () => {
    const app = enzyme.shallow(<Header />);
    expect(app.find('.header__title').text()).toEqual('Welcome to Flight Search Engine');
});