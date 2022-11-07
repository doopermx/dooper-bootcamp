import React from "react";
import { Box } from "@mui/material";
import * as Styles from "./styles";

type LoadingBlockProps = {};

function LoadingBlock({}: LoadingBlockProps) {
  return (
    <Styles.Element>
      <Box>Component</Box>
    </Styles.Element>
  );
}

export default LoadingBlock;
