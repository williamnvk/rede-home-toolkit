import {
  flexDirectionCollection,
  flexWrapCollection,
} from '../constants/flex';
import log from '../utils/log';

/* eslint-disable-next-line consistent-return */
export function flexDirectionValidator(value) {
  try {
    if (!value || !flexDirectionCollection.includes(value)) {
      throw new Error(
        `Error with 'flex-direction: ${value}', flex-direction must by one of ${flexDirectionCollection.join(
          '|',
        )}`,
      );
    }
    return value;
  } catch (e) {
    log(e);
  }
}

/* eslint-disable-next-line consistent-return */
export function flexWrapValidator(value) {
  try {
    if (!value || !flexWrapCollection.includes(value)) {
      throw new Error(
        `Error with 'flex-wrap: ${value}', flex-wrap must by one of ${flexWrapCollection.join(
          '|',
        )}`,
      );
    }
    return value;
  } catch (e) {
    log(e);
  }
}
