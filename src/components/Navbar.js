import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import cynckoLogo from "../Assets/cynkco.png"; // Adjust if needed

// Import screens data from ScreensPage
import CTSC65A from "../Assets/Products/Screens/CT-SC65A.png";
import CTSC65WC from "../Assets/Products/Screens/CT-SC65WC.png";
import CTSC75WC from "../Assets/Products/Screens/CT-SC75WC.png";
import CTSC75A from "../Assets/Products/Screens/CT-SC75A.png";
import CTSC86WC from "../Assets/Products/Screens/CT-SC86WC.png";
import CTSC85A from "../Assets/Products/Screens/CT-SC85A.png";

const screens = [
  {
    name: "All Screens",
    url: "/products/smart-screens/",
  },
  {
    name: "CT-SC65WC",
    image: CTSC65WC,
    url: "/products/smart-screens/ct-sc65wc",
  },
  {
    name: "CT-SC75WC",
    image: CTSC75WC,
    url: "/products/smart-screens/ct-sc75wc",
  },
  {
    name: "CT-SC86WC",
    image: CTSC86WC,
    url: "/products/smart-screens/ct-sc86wc",
  },
  {
    name: "CT-SC65A",
    image: CTSC65A,
    url: "/products/smart-screens/ct-sc65a",
  },
  
  {
    name: "CT-SC75A",
    image: CTSC75A,
    url: "/products/smart-screens/ct-sc75a",
  },
  {
    name: "CT-SC85A",
    image: CTSC85A,
    url: "/products/smart-screens/ct-sc85a",
  },
];

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [smartScreensOpen, setSmartScreensOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      subcategories: [
        { label: "Smart Screens", path: "/products/smart-screens" },
        { label: "Accessories", path: "/products/accessories" },
        { label: "Stands", path: "/products/smartscreen-stands" },
      ],
    },
    { label: "Solutions", path: "/solutions" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const isParentActive = (item) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.subcategories) {
      return item.subcategories.some((sub) =>
        location.pathname.startsWith(sub.path)
      );
    }
    return false;
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleSmartScreensClick = () => {
    setSmartScreensOpen(true);
  };

  const mobileDrawer = (
    <Box sx={{ width: 260, p: 2 }}>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem
              button
              onClick={
                item.subcategories
                  ? () => setProductsOpen(!productsOpen)
                  : undefined
              }
              component={item.subcategories ? "div" : Link}
              to={item.subcategories ? undefined : item.path}
              sx={{
                color: isParentActive(item) ? "#24AC4C" : "inherit",
                fontWeight: isParentActive(item) ? "bold" : "normal",
              }}
            >
              <ListItemText primary={item.label} />
              {item.subcategories &&
                (productsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>

            {item.subcategories && (
              <Collapse in={productsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subcategories.map((sub) => (
                    <ListItem
                      key={sub.label}
                      component={Link}
                      to={sub.path}
                      onClick={
                        sub.label === "Smart Screens"
                          ? handleSmartScreensClick
                          : undefined
                      }
                      sx={{
                        pl: 4,
                        color: isActive(sub.path) ? "#24AC4C" : "inherit",
                        fontWeight: isActive(sub.path) ? "bold" : "normal",
                      }}
                    >
                      <ListItemText primary={sub.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const smartScreensDrawer = (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="h6" sx={{ p: 2, color: "#24AC4C" }}>
        Smart Screens
      </Typography>
      <List>
        {screens.map((screen) => (
          <ListItem
            key={screen.name}
            button
            component={Link}
            to={screen.url}
            onClick={() => setSmartScreensOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              color: isActive(screen.url) ? "#24AC4C" : "inherit",
              fontWeight: isActive(screen.url) ? "bold" : "normal",
            }}
          >
            {screen.image && (
              <Box
                component="img"
                src={screen.image}
                alt={screen.name}
                sx={{ width: 50, height: 50, mr: 2, objectFit: "cover" }}
              />
            )}
            <ListItemText primary={screen.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#fff",
        color: "#000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ textDecoration: "none", mr: 3 }}>
          <img src={cynckoLogo} alt="Cynkco Logo" style={{ height: "40px" }} />
        </Box>

        {/* Spacer to push navigation to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                <Button
                  component={item.subcategories ? "button" : Link}
                  to={item.subcategories ? undefined : item.path}
                  onMouseEnter={
                    item.subcategories ? (e) => setAnchorEl(e.currentTarget) : null
                  }
                  sx={{
                    mx: 1,
                    color: isParentActive(item) ? "#24AC4C" : "inherit",
                    fontWeight: isParentActive(item) ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </Button>

                {item.subcategories && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
                  >
                    {item.subcategories.map((sub) => (
                      <MenuItem
                        key={sub.label}
                        component={Link}
                        to={sub.path}
                        onClick={
                          sub.label === "Smart Screens"
                            ? handleSmartScreensClick
                            : () => setAnchorEl(null)
                        }
                        sx={{
                          color: isActive(sub.path) ? "#24AC4C" : "inherit",
                          fontWeight: isActive(sub.path) ? "bold" : "normal",
                        }}
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {mobileDrawer}
        </Drawer>

        {/* Smart Screens Left Drawer */}
        <Drawer
          anchor="left"
          open={smartScreensOpen}
          onClose={() => setSmartScreensOpen(false)}
        >
          {smartScreensDrawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;