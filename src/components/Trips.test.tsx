import * as React from 'react';
import TripsList from './Trips';
import * as enzyme from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders the correct comp', () => {
  const app = enzyme.shallow(<TripsList />);
  expect(app.find('.flight__container')).toBeDefined();
});
