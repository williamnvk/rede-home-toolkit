// @flow
import React from 'react';
import { Row, Column, Text } from './components';

type Props = {};

function renderApp(props: Props) {
  return (
    <div>
      <Text extra large bold>
        REDE HOME UI
      </Text>
      <Row primary>
        <Column>1</Column>
        <Column>2</Column>
      </Row>

      <Row>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
        <Column>4</Column>
        <Column>5</Column>
        <Column>6</Column>
        <Column>7</Column>
        <Column>8</Column>
        <Column>9</Column>
        <Column>10</Column>
        <Column>11</Column>
        <Column>12</Column>
      </Row>
    </div>
  );
}

export default React.memo<Props>(renderApp);
