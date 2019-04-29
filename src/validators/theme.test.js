import { themeValidator } from '../color';

const validTheme = {}

test(`Pass ${validTheme} to themeValidator(...) expected ${validTheme}`, () => {
  expect(colorValidator(validTheme)).toEqual(validTheme);
});
