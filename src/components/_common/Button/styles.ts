import styled, { css } from 'styled-components';

import { shared } from '../../styled';

import { Props } from './types';

export const StyledButton = styled.button<Props>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-approval)'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  padding: ${({ padding }) => padding || 'auto'};
  font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
  margin: ${({ margin }) => margin || '0.6rem 0.4em'};
  width: ${({ width }) => width || 'initial'};
  height: ${({ height }) => height || 'initial'};
  display: ${({ inVisible }) => (inVisible ? 'none' : 'flex')};
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  cursor: pointer;

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.shadowed &&
    css`
      opacity: 0.5;
    `}

    ${({ hideTextOnMobile }) =>
    hideTextOnMobile &&
    css`
      @media (max-width: ${shared.breakpoints.mobile}) {
        font-size: 0;
        letter-spacing: 0;
        margin: 0 0 1rem;
        padding: 0.3rem 0.5rem;

        > svg {
          margin: 0;
        }
      }
    `}
`;
