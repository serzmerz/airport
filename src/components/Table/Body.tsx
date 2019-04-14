import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';

export interface IBody {
  className?: string;
}

const Body: FunctionComponent<IBody> = ({ className, children }) => (
  <tbody className={className}>{children}</tbody>
);

export default Body;
