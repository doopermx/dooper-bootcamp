import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import NavOptions from "./components/NavOptions";
import UserOptions from "./components/UserOptions";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            noWrap
            mr={2}
            display={{ xs: "none", md: "flex" }}
            color="white"
          >
            LOGO
          </Typography>
          <NavOptions />
          <UserOptions />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
