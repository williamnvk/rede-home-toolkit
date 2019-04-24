import { flexDirectionValidator, flexWrapValidator } from '../flex';
import { defaultDirection, defaultWrap } from "../../constants/flex"

test(`Pass ${defaultDirection} to flexDirectionValidator(...) expected ${defaultDirection}`, () => {
  expect(flexDirectionValidator(defaultDirection)).toEqual(defaultDirection);
});

test(`Pass ${defaultWrap} to flexWrapValidator(...) expected ${defaultWrap}`, () => {
  expect(flexWrapValidator(defaultWrap)).toEqual(defaultWrap);
});
