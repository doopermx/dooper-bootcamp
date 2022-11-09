import { useSession, useUser } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import PortalLayout from "@src/components/common/Layout/PortalLayout";
import ProfileInfo from "@src/components/portal/profile/ProfileInfo";

const Profile: NextPage = () => {
  const currentUser = useUser();

  const session = useSession();

  return (
    <>
      <DocHeader title="Profile" />
      <PortalLayout>
        <ProfileInfo user={currentUser} session={session} />
      </PortalLayout>
    </>
  );
};

Profile.displayName = "Profile";

export default Profile;
