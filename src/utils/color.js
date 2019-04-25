// @flow
import {
  colorPrimary,
  colorSecondary,
  colorText,
  colorSuccess,
  colorError,
  colorInfo,
  colorGray,
  colorBlack,
  colorWarning,
} from '../constants/color';
import { ColorProps } from '../types';

/* eslint-disable */
function transform(col: string, amt: number): string {
  var usePound = false;
  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (
    (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
  );
}
/* eslint-enable */

export function lighten(hex: string, n: number): string {
  return transform(hex, n);
}

export function darken(hex: string, n: number): string {
  return transform(hex, -n);
}

export function handleColor({
  primary,
  secondary,
  success,
  error,
  warning,
  info,
  grey,
  black,
}: ColorProps) {
  if (primary) return colorPrimary;
  if (secondary) return colorSecondary;
  if (success) return colorSuccess;
  if (error) return colorError;
  if (warning) return colorWarning;
  if (info) return colorInfo;
  if (grey) return colorGray;
  if (black) return colorBlack;
  return colorText;
}
