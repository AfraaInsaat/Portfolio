import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  YouTube,
  Instagram,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Fade,
  IconButton,
  Toolbar,
  Button,
  AppBar,
} from "@mui/material";
import { Colors } from "../theme";
import Flag from "react-world-flags";
import Logo from "../Images/logo.png";
const NavBar = () => {
  return (
    // <Fade in={true} unmountOnExit timeout={2000}>
    //   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    //     <Flag code="tr" height="16" />
    //     <Flag code="lb" height="16" />
    //     <Flag code="us" height="16" />
    //     <Flag code="ir" height="16" />
    //   </Box>
    // </Fade>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Menu /> */}
            <img src={Logo} alt="CompanyLogo" />
          </IconButton>
          <Box flexGrow={1} id="Space"></Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: 5, "&:hover": { color: "gold" } }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
