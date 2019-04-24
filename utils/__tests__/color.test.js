import { darken, lighten } from '../color';
const entry = '#11264E'
const dark = '#71c44'
const light = '#1b3058'

test(`Pass ${entry}, 10 to darken(...) expected ${dark}`, () => {
  expect(darken(entry, 10)).toEqual(dark);
});

test(`Pass ${entry}, 10 to lighten(...) expected ${light}`, () => {
  expect(lighten(entry, 10)).toEqual(light);
});
