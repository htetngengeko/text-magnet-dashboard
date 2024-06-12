import CommentIcon from "@mui/icons-material/Comment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarItems } from "./SideBar";

const TopBar = () => {
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("JD");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        minWidth: 200,
        backgroundColor: "secondary.main",
        minHeight: "100vh",
        pt: 4,
        boxShadow: 8,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          mt: 4,
          pl: 6,
        }}
      >
        <Avatar sx={{ width: 60, height: 60, m: 1 }}>J</Avatar>
        <Typography sx={{ color: "white" }}>John Doe</Typography>
        <Typography sx={{ color: "white", fontSize: 14 }}>
          johndoe@blus.com
        </Typography>
      </Box>

      {sidebarItems.slice(0, 9).map((sidebarItem) => {
        return (
          <Link
            key={sidebarItem.id}
            to={sidebarItem.path}
            style={{ textDecoration: "none" }}
          >
            <ListItem>
              <ListItemIcon sx={{ color: "#ffffff" }}>
                {sidebarItem.icon}
              </ListItemIcon>
              <ListItemText sx={{ color: "#ffffff" }}>
                {sidebarItem.label}
              </ListItemText>
            </ListItem>
          </Link>
        );
      })}
    </Box>
  );

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CommentIcon sx={{ color: "secondary.main", fontSize: 40 }} />
            <Typography
              sx={{
                color: "secondary.main",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              TextMagnet
            </Typography>
          </Box>
          <Box
            sx={{
              width: "400px",
              display: "flex",
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                width: { lg: "500px", md: "300px", sm: "200px", xs: "200px" },
                border: "1px solid #E7EAF4",
                borderRadius: 1,
                p: 0.5,
              }}
              placeholder="Search Dashboard"
            />
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              width: "30%",
            }}
          >
            <Typography>Balance : {balance}</Typography>
            <Button variant="outlined" sx={{ border: `2px solid #E7EAF4` }}>
              <ShoppingCartIcon fontSize="10px" sx={{ mr: 1 }} />
              Buy Credit
            </Button>
            <Select
              value={name}
              label="Name"
              onChange={handleChange}
              sx={{
                width: "130px",
                height: "50px",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="JD">John Doe</MenuItem>
              <MenuItem value="AM">Amelia</MenuItem>
              <MenuItem value="JA">Jane</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
              },
            }}
          >
            <Button onClick={toggleDrawer(true)}>
              <ViewHeadlineIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
