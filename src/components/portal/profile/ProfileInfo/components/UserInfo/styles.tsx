import { Avatar, List, styled } from "@mui/material";
import theme from "@src/theme";

export const InfoContainer = styled(List)`
  width: 100%;
`;
export const IconContainer = styled(Avatar)`
  background-color: ${theme.palette.primary.main};
`;
export const InsideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;
