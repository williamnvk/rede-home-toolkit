import { isString, capitalize, upper, lower } from '../strings';

const string = 'javascript'

test(`Pass ${string} to isString(...) expected 'true'`, () => {
  expect(isString(string)).toEqual(true);
});

test(`Pass ${string} to capitalize(...) expected 'Javascript'`, () => {
  expect(capitalize(string)).toEqual('Javascript');
});

test(`Pass ${string} to upper(...) expected 'JAVASCRIPT'`, () => {
  expect(upper(string)).toEqual('JAVASCRIPT');
});

test(`Pass ${string} to lower(...) expected 'javascript'`, () => {
  expect(lower(string)).toEqual('javascript');
});
