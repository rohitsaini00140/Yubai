import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps"; // Correctly imported AppsIcon

const navItems = [
  { label: "Become a Partner", href: "partner" },
  // { label: "Deliver for yubai", href: "#" },
  { label: "Careers", href: "/carrier" },
  { label: "Contact", href: "/contact" },
  // { label: "Privacy", href: "/private" },
  { label: "Media Updates", href: "/media" },
  { label: "Ecommerce", href: "#" },
  
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
        >
          <Link href={"/"}>
            <img
              src="/Logo/logo.png"
              alt="Logo"
              style={{ width: 80, marginRight: 10 }}
            />
          </Link>
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline="none"
              color={window.location.pathname === item.href ? "green" : "inherit"}
             
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "red" },
                "&:active": { color: "green" },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <AppsIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem button key={item} onClick={() => setOpenDrawer(false)}>
              <Link
                key={index}
                href={item.href}
                underline="hover"
                color="inherit"
              >
                <ListItemText primary={item.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
