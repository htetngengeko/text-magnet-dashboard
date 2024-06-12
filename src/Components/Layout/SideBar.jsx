import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export const sidebarItems = [
  {
    id: 1,
    label: "Home",
    icon: <HomeIcon />,
    path: "Home",
  },
  {
    id: 2,
    label: "Reporting",
    icon: <AssessmentIcon />,
    path: "Reporting",
  },
  {
    id: 3,
    label: "FAQ",
    icon: <LiveHelpIcon />,
    path: "FAQ",
  },
  {
    id: 4,
    label: "Terms and Conditions",
    icon: <AccountCircleIcon />,
    path: "TermsAndConditions",
  },
];

const SideBar = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
        },
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        minWidth: 200,
        backgroundColor: "secondary.main",
        minHeight: "100vh",
        pt: 4,
        boxShadow: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Avatar sx={{ width: 30, height: 30, m: 1 }}>J</Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ color: "white" }}>John Doe</Typography>
          <Typography sx={{ color: "white", fontSize: 14 }}>
            johndoe@blus.com
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          borderBottomWidth: 2,
          borderColor: "rgba(255, 255, 255, 0.5)",
        }}
      />

      {sidebarItems.slice(0, 4).map((sidebarItem) => {
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
};

export default SideBar;
