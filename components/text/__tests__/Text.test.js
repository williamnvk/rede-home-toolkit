import React from "react"
import { shallow } from 'enzyme';
import Text from '../Text.js';

describe('Text', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text>Test</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
