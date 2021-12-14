import styled from 'styled-components';

import { Props } from './types';

export const StyledButton = styled.button<Props>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-approval)'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: var(--color-button-text);
  padding: ${({ padding }) => padding || 'initial'};
  font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
  margin: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || 'initial'};
  height: ${({ height }) => height || 'initial'};
  font-size: ${({ fontSize }) => fontSize || '.875rem'};
  border: none;
  border-radius: ${({ buttonRadius }) => buttonRadius || '0.25rem'};
  font-weight: 600;
  font-size: 1rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: solid 0.1rem var(--color-text);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
