import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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
  { label: "Become A Partner", href: "/partner" },
  // { label: "Deliver for yubai", href: "#" },
  // { label: "Careers", href: "/carrier" },
  { label: "Contact", href: "/contact" },
  // { label: "Privacy", href: "/private" },
  // { label: "Media Updates", href: "/media" },
  { label: "Affiliate Amazon Market", href: "/affiliate-market" },
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <AppBar
      position={isFixed ? "fixed" : "static"}
      // color="transparent"

      elevation={isFixed ? 3 : 0}
      sx={{
        transition: "top 0.3s ease-in-out",
        top: isFixed ? 0 : "auto",
        bgcolor: "white",
        color: "black",
        scrollBehavior:"smooth",
      }}
    >
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
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center",  flexDirection: "column",lineHeight:'0px' }}
        >
          <Link href={"/"}   underline="none">
            <img
              src="/Logo/logo.png"
              alt="Logo"
              style={{ width: 120, marginRight: 10 }}
            />
            <br/>
          <Typography variant="h6" component="span" sx={{textDecoration:"none",color:"black",fontSize:"14px"}}> Delivering Hapiness </Typography>
          </Link>
          
        
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline="none"
              color={
                window.location.pathname === item.href ? "green" : "inherit"
              }
              sx={{
                transition: "background-color 0.3s",
                padding: "8px 16px", // Thoda padding de rahe hain taake bg dikhe
                borderRadius: "5px", // Thoda styling ke liye
                color: window.location.pathname === item.href ? "white": "black",
                bgcolor: window.location.pathname === item.href ? "green" : "transparent",
                "&:hover": { bgcolor: "red",color:"white" },
                "&:active": { bgcolor: "green" },
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
        <List sx={{ width: 250 }} >
          {navItems.map((item, index) => (
            <ListItem  button key={item} onClick={() => setOpenDrawer(false)}>
              <Link
                key={index}
                href={item.href}
                underline="none"
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
