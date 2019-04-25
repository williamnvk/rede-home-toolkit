// @flow
import React, { memo } from 'react';
import { Component } from './styled';
import { defaultDirection } from '../../constants/flex';
import { ColumnProps } from './types';

function renderColumn(props: ColumnProps) {
  const p = {
    ...props,
    direction: props.direction || defaultDirection,
    size: props.size || 1,
  };
  return <Component {...p} />;
}

export default memo<ColumnProps>(renderColumn);
