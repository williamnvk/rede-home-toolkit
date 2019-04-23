import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

function setup() {
  const props = {};
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe('App Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
