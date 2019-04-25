import { colorValidator } from '../color';
import { colorPrimary } from "../../constants/color"

test(`Pass ${colorPrimary} to colorValidator(...) expected ${colorPrimary}`, () => {
  expect(colorValidator(colorPrimary)).toEqual(colorPrimary);
});
