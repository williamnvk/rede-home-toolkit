// @flow
import { PROJECT_NAME, ENV } from '../constants';

export function isString(value: string): boolean {
  return typeof value === 'string';
}

export function capitalize(words: string) {
  if (ENV && !isString(words)) {
    throw new Error(
      `${PROJECT_NAME}: capitalize(word) expects a string argument.`,
    );
  }

  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function upper(words: string): string {
  if (ENV && !isString(words)) {
    throw new Error(
      `${PROJECT_NAME}: upper(words) expects a string argument.`,
    );
  }

  return words.toUpperCase();
}

export function lower(words: string): string {
  if (ENV && !isString(words)) {
    throw new Error(
      `${PROJECT_NAME}: lower(words) expects a string argument.`,
    );
  }

  return words.toLowerCase();
}
