import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';
import Body, { IBody } from './Body';
import Cell, { ICell } from './Cell';
import Header, { IHeader } from './Header';
import Row, { IRow } from './Row';

interface ITable {
  className?: string;
}

const Table: FunctionComponent<ITable> & {
  Header: FunctionComponent<IHeader>;
  Body: FunctionComponent<IBody>;
  Row: FunctionComponent<IRow>;
  Cell: FunctionComponent<ICell>;
} = ({ className, children }) => <Root className={className}>{children}</Root>;

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;

const Root = styled.table`
  border-spacing: 0;
  min-width: 100%;
  border-collapse: collapse;
`;
