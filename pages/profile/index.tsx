import { Typography } from "@mui/material";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import PortalLayout from "@src/components/common/Layout/PortalLayout";

export default function Profile() {
  return (
    <>
      <DocHeader title="Profile" />
      <PortalLayout>
        <Typography variant="h1">User Info</Typography>
      </PortalLayout>
    </>
  );
}
