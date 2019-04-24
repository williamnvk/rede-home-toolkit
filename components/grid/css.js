import { css } from 'styled-components';
import { inject } from '../../utils/inject';
import { flexDisplay } from '../../constants/flex';

export const basis = css`
  ${flexDisplay};
  ${function(props) {
    return inject(props);
  }}
`;
