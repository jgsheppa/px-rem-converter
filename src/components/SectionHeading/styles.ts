import styled from "styled-components";

import { Header } from "./types";

export const Heading1 = styled.h1<Header>`
  font-size: ${({ fontSize }) => fontSize || "initial"};
  font-weight: 600;
  font-family: Montserrat;
  text-align: center;
  margin: ${({ margin }) => margin || "0"};
  padding: 0;
`;
