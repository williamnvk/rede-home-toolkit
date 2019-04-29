import { PROJECT_NAME, ENV } from '../constants';

export { colorValidator } from './color';

export function themeValidator(theme): Object {
  if (ENV && !theme) {
    /* TODO create theme validator */
    throw new Error(
      `${PROJECT_NAME}: capitalize(word) expects a string argument.`,
    );
  }
  return true;
}
