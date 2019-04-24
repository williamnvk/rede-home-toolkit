import {
  fontSizeTiny,
  fontSizeSmall,
  fontSizeRegular,
  fontSizeLarge,
  fontSizeExtraLarge,
} from '../constants/fontSize';
import {
  fontFamilyLight,
  fontFamilyRegular,
  fontFamilyMedium,
  fontFamilyBold,
  fontFamilyBlack,
  fontFamilyHeavy,
} from '../constants/fontFamily';

export function handleFontSize(
  { tiny, small, large, extra },
  multiplier = 1,
) {
  if (tiny) return fontSizeTiny * multiplier;
  if (small) return fontSizeSmall * multiplier;
  if (large && !extra) return fontSizeLarge * multiplier;
  if (large && extra) return fontSizeExtraLarge * multiplier;
  return fontSizeRegular * multiplier;
}

export function handleFontFamily({
  light,
  medium,
  bold,
  black,
  heavy,
}) {
  if (light) return fontFamilyLight;
  if (medium) return fontFamilyMedium;
  if (bold) return fontFamilyBold;
  if (black) return fontFamilyBlack;
  if (heavy) return fontFamilyHeavy;
  return fontFamilyRegular;
}
