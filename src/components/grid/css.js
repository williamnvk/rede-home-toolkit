// @flow
import { css } from 'styled-components';
import { inject } from '../../utils/inject';
import { StyleProps } from '../../types';
import { flexDisplay } from '../../constants/flex';

export const basis = css`
  ${flexDisplay};
  ${function(props: StyleProps) {
    return inject(props);
  }}
`;
