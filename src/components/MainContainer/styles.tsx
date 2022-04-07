import { Container, createTheme, styled } from "@mui/material";

export const mainContainerTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px"
        }
      }
    }
  }
});

export const CustomContainer = styled(Container)`
  padding: 16px;
  height: 100vh;
`;

export const InnerContainer = styled(Container)`
  border: 2px solid gray;
  height: 80vh;
`;
