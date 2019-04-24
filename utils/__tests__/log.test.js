import { name } from '../../package.json';
import log from '../log';

const content = 'test'
const result = JSON.stringify({ name, content })

test(`Pass ${content} to log(...) expect result`, () => {
  expect(JSON.stringify(log(content))).toBe(result);
});
