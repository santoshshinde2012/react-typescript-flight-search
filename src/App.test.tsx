import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders the correct comp', () => {
  const app = enzyme.shallow(<App />);
  expect(app.find('.app')).toBeDefined();
});