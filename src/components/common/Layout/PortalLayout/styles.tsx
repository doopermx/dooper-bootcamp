import { styled } from "@mui/material";
import theme from "@src/theme";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  ${theme.breakpoints.down("md")} {
    main {
      flex: 1;
    }
  }
`;
