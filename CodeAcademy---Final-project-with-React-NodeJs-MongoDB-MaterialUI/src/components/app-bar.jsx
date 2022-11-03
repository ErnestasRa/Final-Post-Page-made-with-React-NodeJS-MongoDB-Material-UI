import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import { get } from "../functions/http";
import colorBackground from "../styles/colors";
import MainContext from "../context/main-context";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navbarItems, setNavBarItems] = React.useState([]);
  const [navBarSettings, setNavBarSettings] = React.useState([]);
  const { userProfile, setUserProfile } = React.useContext(MainContext);

  const getUserProfileInfo = async () => {
    const res = await get("loggedinuser");
    if (!res.error) {
      setUserProfile(res.data.loggedInUser);
    }
  };

  const getNavBarItems = async () => {
    const res = await get("navbarnot");
    setNavBarItems(res);
  };

  const getNavBarSettings = async () => {
    const res = await get("navbarsettings");
    setNavBarSettings(res);
  };

  React.useEffect(() => {
    getNavBarItems();
    getNavBarSettings();
    getUserProfileInfo();
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: colorBackground.background.secondary.main }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TwitterIcon
            sx={{
              display: { xs: "none", md: "flex", color: "lightblue" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", color: "lightblue" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "lightblue",
              textDecoration: "none",
            }}
          >
            Budget Twitter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navbarItems.map((page, i) => (
                <Link href={page.to} key={i + 1}>
                  <MenuItem onClick={() => setAnchorElNav(null)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <TwitterIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Budget Twitter
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navbarItems.map((page, i) => (
              <Link href={page.to} key={i + 1}>
                <Button
                  onClick={() => setAnchorElNav(null)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={(e) => setAnchorElUser(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src={userProfile.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {navBarSettings.map((setting, i) => (
                <Link href={setting.to} key={i + 1}>
                  <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
