import { handleFontSize } from '../text';
import { fontSizeTiny } from "../../constants/fontSize"

const tinyProps = {
    tiny: true
}

test(`Pass ${tinyProps} to handleFontSize(...) expected ${fontSizeTiny}`, () => {
  expect(handleFontSize(tinyProps)).toEqual(fontSizeTiny);
});
