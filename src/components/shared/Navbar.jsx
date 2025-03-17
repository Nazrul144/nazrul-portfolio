'use client'
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const Navbar = (props) => {

  const pathName = usePathname();

  const navItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Services',
      path: '/services'
    },
    {
      title: 'Projects',
      path: '/projects'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <span className="font-bold"><span className="text-red-600">N</span>azrul</span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center", justifyContent: "center", display: "flex", alignItems: "center",  }}>
              <Link className={` tong relative group text-xl hover:text-red-600 ease-in-out duration-300  ${pathName === navItem.path ? "text-red-600" : ""}`} href={navItem.path}>
              <ListItemText primary={navItem.title}>{navItem.title}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar className="lg:px-20 shadow-none" component="nav" sx={{ backgroundColor: "transparent" }}  >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link className="font-bold" href={'/'}><span className="text-red-600">N</span>azrul.</Link>
            </Typography>
            <Box  sx={{ display: { xs: "none", sm: "block" } }}>
              <div className="flex space-x-6 text-xl font-bold sm:font-bold">
              {
                navItems?.map((navItem)=> <Link className={`relative group text-xl hover:text-red-600 ease-in-out duration-300 ${pathName === navItem.path ? "text-red-600" : ""}`}  key={navItem.title} href={navItem.path} >{navItem.title}
                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>)
              }
          
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
