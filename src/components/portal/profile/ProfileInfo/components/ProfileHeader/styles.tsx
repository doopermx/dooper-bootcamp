import { Avatar, styled } from "@mui/material";

export const Wrapper = styled("div")<{ bgImage: string }>`
  height: 20vh;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const UserContainer = styled("div")`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 100%;
  width: 100%;
  padding: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.51);
`;

export const ProfilePic = styled(Avatar)`
  width: 15vw;
  height: 15vw;
  max-width: 120px;
  max-height: 120px;
`;
