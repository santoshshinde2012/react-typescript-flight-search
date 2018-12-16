import * as React from 'react';
import { TripItem } from './TripItem';
import * as enzyme from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders the correct comp', () => {
  const trip = {};
  const app = enzyme.shallow(<TripItem trip={trip}/>);
  expect(app.find('.flight__details')).toBeDefined();
});
