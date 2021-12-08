import styled from "styled-components";

import { TextBlockTypes } from "./types";

export const TextArea = styled.p<TextBlockTypes>`
  text-align: left;
  font-size: ${({ fontSize }) => fontSize || "0.875rem"};
  line-height: 1.625rem;
  height: ${({ height }) => height || "100%"};
  width: 100%;
  margin: ${({ margin }) => margin || "0"};
`;
