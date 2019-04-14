import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface IFlex {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  direction?: 'row' | 'column';
  children?: ReactNode;
  className?: string;
}

const Flex: FunctionComponent<IFlex> = styled('div')<IFlex>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

export default Flex;
