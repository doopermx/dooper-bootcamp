import { NextPage } from "next";
import { useRouter } from "next/router";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import DocHeader from "@src/components/common/Layout/DocHeader/DocHeader";
import PortalLayout from "@src/components/common/Layout/PortalLayout";
import UpdateProfile from "@src/components/portal/profile/UpdateProfile";

const Update: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <DocHeader title="Update Profile" />
      <PortalLayout>
        <Box>
          <Button
            fullWidth={false}
            size="large"
            startIcon={<ArrowBackRounded />}
            onClick={() => router.back()}
          >
            Back
          </Button>
        </Box>
        <Typography variant="h3" fontWeight={600}>
          Update Profile
        </Typography>
        <UpdateProfile />
      </PortalLayout>
    </>
  );
};

Update.displayName = "Update";

export default Update;
