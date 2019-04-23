import { flexDirectionValidator } from '../flex';
import { defaultDirection } from "../../constants/flex"

test(`Pass ${defaultDirection} expected ${defaultDirection}`, () => {
  expect(flexDirectionValidator(defaultDirection)).toBe(defaultDirection);
});
