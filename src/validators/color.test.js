import { colorValidator } from '../color';

const validColor = "#273D6A"

test(`Pass ${validColor} to colorValidator(...) expected ${validColor}`, () => {
  expect(colorValidator(validColor)).toEqual(validColor);
});
