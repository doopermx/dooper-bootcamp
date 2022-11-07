import { useRouter } from "next/router";
import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from "@mui/material";

const settings = ["My Profile", "Profile Settings", "Logout"];

function UserOptions() {
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.id === "Profile Settings" &&
      router.push("/profile/update");
    event.currentTarget.id === "My Profile" && router.push("/profile");
    setAnchorElUser(null);
  };

  return (
    <Box flexGrow={0}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt="Remy Sharp" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            id={setting}
            onClick={(e) => handleCloseUserMenu(e)}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserOptions;
