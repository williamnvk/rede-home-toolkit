import React from 'react';
import { Component } from './styled';
import { defaultDirection } from '../../constants/flex';

function renderRow(props) {
  const p = {
    ...props,
    direction: props.direction || defaultDirection,
  };
  return <Component {...p} />;
}

export default React.memo(renderRow);
