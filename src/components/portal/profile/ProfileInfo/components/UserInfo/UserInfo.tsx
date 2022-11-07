import {
  EmailRounded,
  LocalPhoneRounded,
  LocationOnRounded
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Typography
} from "@mui/material";
import * as Styled from "./styles";

type Props = {
  [key: string]: any;
};

export default function UserInfo({ user }: Props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Styled.IconContainer>
            <EmailRounded />
          </Styled.IconContainer>
        </ListItemAvatar>
        <Styled.InsideWrapper>
          <Typography variant="h5">Email</Typography>
          <Typography variant="caption">{user.email}</Typography>
        </Styled.InsideWrapper>
      </ListItem>
      <Divider />

      <ListItem divider>
        <ListItemAvatar>
          <Styled.IconContainer>
            <LocationOnRounded />
          </Styled.IconContainer>
        </ListItemAvatar>
        <Styled.InsideWrapper>
          <Typography variant="h5">Location</Typography>
          <Typography variant="caption">{`${user.city}, ${user.state}, ${user.country}`}</Typography>
        </Styled.InsideWrapper>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Styled.IconContainer>
            <LocalPhoneRounded />
          </Styled.IconContainer>
        </ListItemAvatar>
        <Styled.InsideWrapper>
          <Typography variant="h5">Phone Number</Typography>
          <Typography variant="caption">{user.phone_number}</Typography>
        </Styled.InsideWrapper>
      </ListItem>
    </List>
  );
}
