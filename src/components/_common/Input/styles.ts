import styled from 'styled-components';

import { InputProps } from './types';

export const StyledInput = styled.input<InputProps>`
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth};
  font-size: 16px;
  height: ${({ height }) => height || '100%'};
  border: solid 1px var(--color-approval);
  border-radius: ${({ borderRadius }) => borderRadius || '0.25rem'};
  height: 2.5rem;
  line-height: 1.5rem;
  padding: 0.25rem 0.5rem;
  &:focus {
    border: 1px solid var(--color-approved);
  }
`;

export const StyledInputContainer = styled.div<InputProps>`
  display: inline-flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0.5rem'};
  margin-top: ${({ marginTop }) => (marginTop ? '1rem' : 0)};
  margin-left: ${({ marginLeft }) => marginLeft || 'initial'};
  margin-right: ${({ marginRight }) => marginRight || 'initial'};
  flex: ${({ flex }) => flex || '1'};
`;

export const StyledInnerContainer = styled.div<InputProps>`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  & > svg {
    position: absolute;
    right: 0.5rem;
    margin-top: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  }
  > .icon-button {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    margin-top: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
