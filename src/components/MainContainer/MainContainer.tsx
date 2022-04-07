import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as Styles from "./styles";
import { mainContainerTheme } from "./styles";

type MainContainerProps = {};

function MainContainer({}: MainContainerProps) {
  return (
    <ThemeProvider theme={mainContainerTheme}>
      <Styles.CustomContainer>
        <Styles.InnerContainer>
          <Box>MAin container</Box>
        </Styles.InnerContainer>
      </Styles.CustomContainer>
    </ThemeProvider>
  );
}

export default MainContainer;
