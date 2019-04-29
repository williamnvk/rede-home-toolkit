// @flow
import React, { memo } from 'react';
import { Grid } from './styled';
import type { ColumnProps } from './types';
import { withRef } from '../../utils';

function renderColumn(props: ColumnProps) {
  return <Grid el="column" {...props} />;
}

export default memo<ColumnProps>(withRef(renderColumn));
