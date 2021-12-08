import styled, { css } from "styled-components";

import { ContainerProps } from "./types";

const Container = styled.div<ContainerProps>`
  display: flex;
  box-sizing: border-box;
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  align-self: ${(props) => props.self || "initial"};
  width: ${(props) => props.width || "initial"};
  max-width: ${(props) => props.maxWidth || "initial"};
  max-height: ${(props) => props.maxHeight || "initial"};
  margin: ${(props) => props.margin || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  position: ${(props) => props.position || "initial"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "initial"};
  background-color: ${(props) => props.backgroundColor || "inherit"};
  overflow: ${(props) => props.overflow || "visible"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  min-width: ${(props) => props.minWidth || "initial"};
  min-height: ${(props) => props.minHeight || "initial"};
  bottom: ${({ bottom }) => bottom || "initial"};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ sticky }) =>
    sticky &&
    css`
      padding-bottom: 0.5rem;
      position: sticky;
      top: 0;
      z-index: 1000;
    `}
  ${({ warning }) =>
    warning &&
    css`
    border 1px solid red;
    pointer-events: none
  `};
`;

export default Container;
