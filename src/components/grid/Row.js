// @flow
import React, { memo } from 'react';
import { Component } from './styled';
import { defaultDirection } from '../../constants/flex';
import { RowProps } from './types';

function renderRow(props: RowProps) {
  const p = {
    ...props,
    direction: props.direction || defaultDirection,
  };
  return <Component {...p} />;
}

export default memo<RowProps>(renderRow);
