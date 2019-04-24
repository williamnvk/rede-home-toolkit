import React from 'react';
import { Component } from './styled';
import { defaultDirection } from '../../constants/flex';

function renderColumn(props) {
  const p = {
    ...props,
    direction: props.direction || defaultDirection,
    size: props.size || 1,
  };
  return <Component {...p} />;
}

export default React.memo(renderColumn);
