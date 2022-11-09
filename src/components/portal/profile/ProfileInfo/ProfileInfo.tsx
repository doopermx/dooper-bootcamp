import {
  Session,
  useSupabaseClient,
  useUser
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Database } from "@src/types/supabase";
import ProfileHeader from "./components/ProfileHeader";
import UserInfo from "./components/UserInfo";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function ProfileInfo({ session }: { session: Session | null }) {
  const [loading, setLoading] = useState(true);

  const supabase = useSupabaseClient<Database>();

  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<Profiles>({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
    country: "",
    photo_url: ""
  });

  const user = useUser();
  useEffect(() => {
    session && getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let i = 0;
      while (i < 4) {
        var { data, error, status } = await supabase
          .from("profiles")
          .select(
            `email, phone_number, name, lastname, country, state, city, photo_url`
          )
          .eq("id", user ? user.id : "")
          .single();

        if (i === 3 && error && status !== 406) {
          throw error;
        }

        if (data && user) {
          setCurrentUser({ ...data, id: user.id });
        }
        i++;
      }
    } catch (error) {
      alert("Error loading user data!");
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container disableGutters>
      <ProfileHeader
        fullName={`${currentUser.name} ${currentUser.lastname}`}
        profilePic={currentUser.photo_url}
      />
      {currentUser.email && <UserInfo user={currentUser} />}
    </Container>
  );
}
