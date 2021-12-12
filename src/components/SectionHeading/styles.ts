import styled from 'styled-components';

import { Header } from './types';

export const Heading1 = styled.h1<Header>`
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  font-weight: 600;
  text-align: left;
  margin: ${({ margin }) => margin || '0'};
  padding: 0;
  color: var(--color-text);
`;

export const Heading2 = styled.h2<Header>`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-weight: 600;
  text-align: left;
  margin: ${({ margin }) => margin || '0'};
  padding: 0;
  color: var(--color-text);
`;
