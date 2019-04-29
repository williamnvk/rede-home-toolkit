import styled from 'styled-components';
import { basis } from './styles';

export const Heading = styled.div`
  ${function({ el, theme: { heading } }) {
    return heading[el];
  }}
  ${basis}
`;
