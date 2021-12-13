import styled from 'styled-components';

import { Props } from './types';

export const StyledButton = styled.button<Props>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-approval)'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: var(--color-button-text);
  padding: ${({ padding }) => padding || '0.5rem 1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
  margin: ${({ margin }) => margin || '0.6rem 0.4em'};
  width: ${({ width }) => width || 'initial'};
  height: ${({ height }) => height || 'initial'};
  display: ${({ inVisible }) => (inVisible ? 'none' : 'flex')};
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  font-size: ${({ fontSize }) => fontSize || '.875rem'};
  border: none;
  border-radius: ${({ buttonRadius }) => buttonRadius || '0.25rem'};
  font-weight: 600;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    border: solid 0.2rem var(--color-denial);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
