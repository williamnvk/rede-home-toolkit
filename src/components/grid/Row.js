// @flow
import React, { memo } from 'react';
import { Grid } from './styled';
import type { RowProps } from './types';
import { withRef } from '../../utils';

function renderRow(props: RowProps) {
  return <Grid el="row" {...props} />;
}

export default memo<RowProps>(withRef(renderRow));
