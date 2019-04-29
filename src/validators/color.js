// @flow
import { PROJECT_NAME, ENV } from '../constants';

export function colorValidator(color: string): string | boolean {
  const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

  if (ENV && !isValid) {
    /* TODO create theme validator */
    throw new Error(
      `${PROJECT_NAME}: colorValidator(color) expects a valid hexadecial color argument.`,
    );
  }
  return color;
}
