import { OfflinePin } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LaptopIcon from "@mui/icons-material/Laptop";
import UpdateIcon from "@mui/icons-material/Update";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import { pieData } from "../../utils/Data";
import CardStyleHome from "../CardStyleHome";
import PieComponent from "../Charts/PieComponent";
import { responsiveProps } from "./FAQ";

const ResponsiveGridLayout = WidthProvider(Responsive);
const Home = () => {
  return (
    <ResponsiveGridLayout {...responsiveProps}>
      <Box key="1" sx={{ mt: 2 }}>
        <Card sx={{ height: "80%", boxShadow: 5 }}>
          <CardHeader
            title="Transactions"
            subheader="Total 48.5% Growth this month"
            subheaderTypographyProps={{ style: { color: "#ffffff" } }}
            sx={{
              height: "40px",
              bgcolor: "#FFA800",
              mb: 4,
              color: "#ffffff",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "end",
            }}
          >
            <CardStyleHome
              icon={OfflinePin}
              text="Sales"
              count="256K"
              iconColor="#00B7BE"
            />
            <CardStyleHome
              icon={AccountCircleIcon}
              text="Users"
              count="12.6K"
              iconColor="#FF6063"
            />
            <CardStyleHome
              icon={LaptopIcon}
              text="Product"
              count="8.4K"
              iconColor="#E9DF8B"
            />
            <CardStyleHome
              icon={UpdateIcon}
              text="Revenue"
              count="256K"
              iconColor="#B5D3E6"
            />
          </CardContent>
        </Card>
      </Box>
      <Box key="2">
        <Card sx={{ height: "90%", boxShadow: 5 }}>
          <CardHeader
            title="Total Visitors"
            sx={{
              height: "40px",
              bgcolor: "#FF9E00",
              mb: 4,
              color: "#ffffff",
            }}
          />
          <CardContent>
            <PieComponent data={pieData} />
          </CardContent>
        </Card>
      </Box>
      <Box
        key="3"
        sx={{
          backgroundImage: 'url("/manTakingBreak.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "rotate",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        key="4"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Welcome John!</Typography>
        <Typography variant="h5">Take a time to analyze your data.</Typography>
      </Box>
    </ResponsiveGridLayout>
  );
};

export default Home;
