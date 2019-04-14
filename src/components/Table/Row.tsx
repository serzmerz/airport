import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';

export interface IRow {
  className?: string;
}

const Row: FunctionComponent<IRow> = ({ className, children }) => (
  <Tr className={className}>{children}</Tr>
);

export default Row;

const Tr = styled.tr`
  &:nth-child(odd) td {
    background-color: ${props => props.theme.colors.optionGrey};
  }
`;
