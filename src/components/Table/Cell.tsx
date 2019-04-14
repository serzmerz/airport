import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';

export interface ICell {
  className?: string;
  textAlign?: CSSStyleDeclaration['textAlign'];
}

const Cell: FunctionComponent<ICell> = ({ className, children, ...rest }) => (
  <Td className={className} {...rest}>
    {children}
  </Td>
);

export default Cell;

const Td = styled('td')<{ textAlign?: CSSStyleDeclaration['textAlign'] }>`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.noticeGrey};
  padding: 15px 25px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  ${props => props.theme.media.sm`
     padding: 10px 15px;
  `}
  &:last-child {
    padding-right: 5px;
  }
  &:first-child {
    text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  }
`;
