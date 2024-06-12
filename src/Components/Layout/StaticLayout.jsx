import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const StaticLayout = () => {
  return (
    <Box>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          zIndex: 5,
          flex: 1,
        }}
      >
        <SideBar />
        <Box sx={{ p: 0, width: "100%", height: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default StaticLayout;
