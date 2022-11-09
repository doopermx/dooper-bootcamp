import { Typography } from "@mui/material";
import * as Styled from "./styles";

type Props = {
  fullName: string;
  profilePic: string | null;
};

function ProfileHeader({ fullName, profilePic }: Props) {
  return (
    <Styled.Wrapper bgImage="/assets/banner.jpg">
      <Styled.UserContainer>
        <Styled.ProfilePic src={profilePic ? profilePic : undefined} />
        <Typography variant="h3" color="white" fontWeight={600}>
          {`${fullName}`}
        </Typography>
      </Styled.UserContainer>
    </Styled.Wrapper>
  );
}

export default ProfileHeader;
