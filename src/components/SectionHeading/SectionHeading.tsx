import React, { FunctionComponent } from "react";

import { Heading1 } from "./styles";

import { SectionHeader } from "./types";

const SectionHeading: FunctionComponent<SectionHeader> = ({
  children,
  fontSize,
  margin,
  h1,
}) => {
  return (
    <>
      {h1 && (
        <Heading1 margin={margin} fontSize={fontSize}>
          {children}
        </Heading1>
      )}
    </>
  );
};

export default SectionHeading;
