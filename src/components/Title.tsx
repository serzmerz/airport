import React from 'react';
import styled from 'styled-components';

export default styled.h1`
  color: ${props => props.theme.colors.dark};
  font-size: 70px;
  font-weight: 300;
  text-transform: uppercase;
`;
