import { NextPage } from "next";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import PortalLayout from "@src/components/common/Layout/PortalLayout";
import ProfileInfo from "@src/components/portal/profile/ProfileInfo";

const Profile: NextPage = () => {
  return (
    <>
      <DocHeader title="Profile" />
      <PortalLayout>
        <ProfileInfo />
      </PortalLayout>
    </>
  );
};

Profile.displayName = "Profile";

export default Profile;
