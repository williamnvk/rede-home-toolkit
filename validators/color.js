import log from '../utils/log';

/* eslint-disable-next-line consistent-return */
export function colorValidator(color) {
  try {
    if (color && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      return color;
    }
    throw new Error(`Invalid hexadecimal color: ${color}`);
  } catch (e) {
    log(e);
  }
}
