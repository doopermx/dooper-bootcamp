import Link from "next/link";
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

const settings = [
  { title: "My Profile", href: "/profile" },
  { title: "Update Profile", href: "/profile/update" },
  { title: "Logout", href: "/" }
];

export default function UserOptions() {
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
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
          <Link href={setting.href} key={setting.title}>
            <MenuItem id={setting.title} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting.title}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}
