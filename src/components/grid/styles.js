import { css } from 'styled-components';
import { inject } from '../../utils';

export const basis = css`
  display: flex;
  ${props => inject(props)}
`;
