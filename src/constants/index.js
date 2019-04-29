import { name } from '../../package.json';

export const PROJECT_NAME = name;
export const ENV = process.env.NODE_ENV === 'production';
