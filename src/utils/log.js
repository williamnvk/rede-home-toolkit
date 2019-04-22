import { name } from '../../package.json';

export default function(content) {
  /* eslint-disable-next-line no-throw-literal */
  throw `${name}\n\n${content}`;
}
