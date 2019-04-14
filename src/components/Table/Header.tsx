import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';

export interface IHeader {
  className?: string;
  columns: Array<string | null>;
  borderBottom?: boolean;
  textAlign?: CSSStyleDeclaration['textAlign'];
}

const Header: FunctionComponent<IHeader> = ({ className, columns, textAlign, ...rest }) => (
  <thead>
    <Tr className={className} {...rest}>
      {columns.map((column, index) => (
        <Th key={index} textAlign={textAlign}>
          {column}
        </Th>
      ))}
    </Tr>
  </thead>
);

export default Header;

const Th = styled.th<{ textAlign?: CSSStyleDeclaration['textAlign'] }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.darkGrey};
  padding: 20px 25px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  &:last-child {
    padding-right: 5px;
  }
  white-space: nowrap;
  ${props => props.theme.media.sm`
     padding: 10px 15px;
  `}
`;

const Tr = styled('tr')<{ borderBottom?: boolean }>`
  border-bottom: ${props =>
  props.borderBottom ? `2px solid ${props.theme.colors.lightGrey};` : 'none'};
`;
