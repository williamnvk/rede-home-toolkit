// @flow
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
import { FontSizeProps, FontFamilyProps } from '../types/text';

export function handleFontSize(
  { tiny, small, large, extra }: FontSizeProps,
  multiplier: number = 1,
): number {
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
}: FontFamilyProps): string {
  if (light) return fontFamilyLight;
  if (medium) return fontFamilyMedium;
  if (bold) return fontFamilyBold;
  if (black) return fontFamilyBlack;
  if (heavy) return fontFamilyHeavy;
  return fontFamilyRegular;
}
