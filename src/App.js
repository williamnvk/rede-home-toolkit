// @flow
import React from 'react';
import { Row, Column, Heading } from './components';
import { withTheme } from './theme';

type Props = {};

function renderApp(props: Props) {
  return (
    <div>
      <Heading el="h1" color="primary" background="success">
        teste H1
      </Heading>
      <Heading el="h2" color="success">
        teste H2
      </Heading>
      <Heading el="h3" color="error">
        teste H3
      </Heading>
      <Heading el="h4" color="secondary">
        teste H3
      </Heading>
      <Heading el="h5">teste H3</Heading>
      <Heading el="h6">teste H3</Heading>
      <Row background="primary" height={20}>
        <Column background="error" height={5}>
          55rem
        </Column>
        <Column background="custom:#ff0000">
          <Row background="secondary" size={1}>
            <Column justify="center" align="bottom">
              1
            </Column>
            <Column
              justify="right"
              align="center"
              background="success"
            >
              2
            </Column>
          </Row>
        </Column>
        <Column width={5}>5rem</Column>
      </Row>
    </div>
  );
}

export default React.memo<Props>(withTheme(renderApp));
