import { down } from "styled-breakpoints";
import { styled } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  ${down("md")} {
    main {
      flex: 1;
    }
  }
`;
