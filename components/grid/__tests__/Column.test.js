import React from "react"
import { shallow } from 'enzyme';
import Column from '../Column.js';

describe('Column', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).toMatchSnapshot();
  });
});
