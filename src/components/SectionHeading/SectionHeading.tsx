import React, { FunctionComponent } from 'react';

import { Heading1, Heading2 } from './styles';

import { SectionHeader } from './types';

const SectionHeading: FunctionComponent<SectionHeader> = ({
  children,
  fontSize,
  margin,
  h1,
  h2,
}) => {
  return (
    <>
      {h1 && (
        <Heading1 margin={margin} fontSize={fontSize}>
          {children}
        </Heading1>
      )}
      {h2 && (
        <Heading2 margin={margin} fontSize={fontSize}>
          {children}
        </Heading2>
      )}
    </>
  );
};

export default SectionHeading;
