import React from "react"
import { shallow } from 'enzyme';
import { Column, Row } from '../index.js';

describe('Column', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('Row', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });
});
