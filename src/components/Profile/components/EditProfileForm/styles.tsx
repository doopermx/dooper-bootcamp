import { Box, Button, styled } from "@mui/material";

export const Styledform = styled("form")`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 520px;
  @media screen and (max-width: 640px) {
    max-width: 90%;
  }
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 10px;
  width: 50%;
  max-width: 300px;
`;
