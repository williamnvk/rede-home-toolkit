// @flow

/* eslint-disable-next-line consistent-return */
export function colorValidator(color: string): string | boolean {
  if (color && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
    return color;
  }
  return false;
}
