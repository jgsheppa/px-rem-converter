import React, { FunctionComponent } from "react";

import { TextArea } from "./styles";
import { TextBlockTypes } from "./types";

const TextBlock: FunctionComponent<TextBlockTypes> = ({
  children,
  height,
  margin,
}) => {
  return (
    <TextArea height={height} margin={margin}>
      {children}
    </TextArea>
  );
};

export default TextBlock;
