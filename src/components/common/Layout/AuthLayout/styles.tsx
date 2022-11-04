import { Box, styled } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const SideImg = styled(Box)<{ img: string }>`
  width: 50%;
  height: 100vh;
  display: block;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

export const LeftSide = styled("div")`
  width: 50%;
  min-width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
