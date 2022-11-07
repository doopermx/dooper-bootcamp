import { Container } from "@mui/material";
import ProfileHeader from "./components/ProfileHeader";
import UserInfo from "./components/UserInfo";

type User = {
  name: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phone_number: string;
  photo_url: string;
};

const user: User = {
  name: "John",
  lastname: "Doe",
  city: "Austin",
  state: "Texas",
  country: "United States of America",
  email: "johndoe@test.com",
  phone_number: "+15125553890",
  photo_url: "http://airbnboverlast.nl/wp-content/uploads/2016/06/happy-man.jpg"
};

export default function ProfileInfo() {
  return (
    <Container disableGutters>
      <ProfileHeader
        fullName={`${user.name} ${user.lastname}`}
        profilePic={`${user.photo_url}`}
      />
      <UserInfo user={{ ...user }} />
    </Container>
  );
}
