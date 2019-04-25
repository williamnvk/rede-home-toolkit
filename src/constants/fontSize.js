// @flow
import { DEFAULT_SIZE } from './constants';

export const fontSizeTiny: number = parseFloat(DEFAULT_SIZE * 0.75);
export const fontSizeSmall: number = parseFloat(DEFAULT_SIZE * 0.85);
export const fontSizeRegular: number = parseFloat(
  DEFAULT_SIZE * 1.25,
);
export const fontSizeLarge: number = parseFloat(
  fontSizeRegular * 1.5,
);
export const fontSizeExtraLarge: number = parseFloat(
  fontSizeLarge * 1.5,
);
