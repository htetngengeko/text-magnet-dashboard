import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { AreaData, RaderData } from "../../utils/Data";
import CardComponent from "../CardComponent";
import AreaComponent from "../Charts/AreaComponent";
import ComposedComponent from "../Charts/ComposedComponent";
import RaderChart from "../Charts/RaderChart";

const ResponsiveGridLayout = WidthProvider(Responsive);

const responsiveProps = {
  isDraggable: false,
  isResizable: false,
  rowHeight: 20,
  className: "responsive-grid",
  breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480 },
  cols: { lg: 3, md: 3, sm: 2, xs: 1 },
  layouts: {
    lg: [
      { i: "1", x: 0, y: 0, w: 3, h: 2 },
      { i: "2", x: 0, y: 2, w: 1, h: 2 },
      { i: "3", x: 2, y: 0, w: 2, h: 2 },
      { i: "4", x: 0, y: 4, w: 1, h: 5 },
      { i: "5", x: 1, y: 0, w: 1, h: 5 },
      { i: "6", x: 2, y: 0, w: 1, h: 5 },
      { i: "7", x: 0, y: 9, w: 1, h: 5 },
      { i: "8", x: 1, y: 0, w: 1, h: 5 },
      { i: "9", x: 2, y: 0, w: 1, h: 5 },
      { i: "10", x: 0, y: 14, w: 3, h: 13 },
      { i: "11", x: 0, y: 27, w: 1, h: 15 },
      { i: "12", x: 1, y: 27, w: 2, h: 15 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 3, h: 2 },
      { i: "2", x: 0, y: 2, w: 1, h: 2 },
      { i: "3", x: 2, y: 0, w: 1, h: 2 },
      { i: "4", x: 0, y: 4, w: 1, h: 5 },
      { i: "5", x: 1, y: 0, w: 1, h: 5 },
      { i: "6", x: 2, y: 0, w: 1, h: 5 },
      { i: "7", x: 0, y: 9, w: 1, h: 5 },
      { i: "8", x: 1, y: 0, w: 1, h: 5 },
      { i: "9", x: 2, y: 0, w: 1, h: 5 },
      { i: "10", x: 0, y: 14, w: 3, h: 10 },
      { i: "11", x: 0, y: 24, w: 1, h: 8 },
      { i: "12", x: 1, y: 24, w: 2, h: 8 },
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 2, h: 2 },
      { i: "2", x: 0, y: 2, w: 1, h: 2 },
      { i: "3", x: 1, y: 0, w: 1, h: 2 },
      { i: "4", x: 0, y: 4, w: 1, h: 5 },
      { i: "5", x: 1, y: 0, w: 1, h: 5 },
      { i: "6", x: 0, y: 9, w: 1, h: 5 },
      { i: "7", x: 1, y: 5, w: 1, h: 5 },
      { i: "8", x: 0, y: 14, w: 1, h: 5 },
      { i: "9", x: 1, y: 10, w: 1, h: 5 },
      { i: "10", x: 0, y: 19, w: 2, h: 10 },
      { i: "11", x: 0, y: 29, w: 1, h: 8 },
      { i: "12", x: 1, y: 29, w: 1, h: 8 },
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 1, h: 2 },
      { i: "2", x: 0, y: 2, w: 1, h: 2 },
      { i: "3", x: 0, y: 4, w: 1, h: 2 },
      { i: "4", x: 0, y: 6, w: 1, h: 5 },
      { i: "5", x: 0, y: 11, w: 1, h: 5 },
      { i: "6", x: 0, y: 16, w: 1, h: 5 },
      { i: "7", x: 0, y: 21, w: 1, h: 5 },
      { i: "8", x: 0, y: 26, w: 1, h: 5 },
      { i: "9", x: 0, y: 31, w: 1, h: 5 },
      { i: "10", x: 0, y: 36, w: 1, h: 10 },
      { i: "11", x: 0, y: 46, w: 1, h: 10 },
      { i: "12", x: 0, y: 56, w: 1, h: 8 },
    ],
  },
};

const Reporting = () => {
  const [name, setName] = useState("JD");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ p: 1 }}>
      <ResponsiveGridLayout {...responsiveProps}>
        <Box key="1">
          <Typography variant="h4" sx={{ color: "secondary.main" }}>
            Overview
          </Typography>
        </Box>
        <Box key="2">
          <Select
            value={name}
            onChange={handleChange}
            sx={{
              width: "80%",
              height: "80%",
            }}
          >
            <MenuItem value="JD">John Doe</MenuItem>
            <MenuItem value="AM">Amelia</MenuItem>
            <MenuItem value="JA">Jane</MenuItem>
          </Select>
        </Box>
        <Box
          key="3"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Select
            value={name}
            onChange={handleChange}
            sx={{
              width: "30%",
              height: "80%",
              mr: 2,
            }}
          >
            <MenuItem value="JD">John Doe</MenuItem>
            <MenuItem value="AM">Amelia</MenuItem>
            <MenuItem value="JA">Jane</MenuItem>
          </Select>
          <Button
            variant="container"
            sx={{ border: `2px solid #E7EAF4`, height: "80%" }}
          >
            <DownloadIcon fontSize="10px" sx={{ mr: 1 }} />
            Buy Credit
          </Button>
        </Box>

        <Box key="4">
          <CardComponent
            title="Message"
            number="1,2455"
            percent="12%"
            icon={ArrowDropUpIcon}
            iconColor="green"
          />
        </Box>
        <Box key="5">
          <CardComponent
            title="Message Received"
            number="1,6477"
            percent="9.6%"
            icon={ArrowDropDownIcon}
            iconColor="red"
          />
        </Box>
        <Box key="6">
          <CardComponent
            title="Daily Rate"
            number="98.4"
            percent="0.2%"
            icon={ArrowDropDownIcon}
            iconColor="red"
          />
        </Box>
        <Box key="7">
          <CardComponent
            title="Reply Rate"
            number="34.4%"
            percent="12.8%"
            icon={ArrowDropUpIcon}
            iconColor="green"
          />
        </Box>
        <Box key="8">
          <CardComponent
            title="Payment"
            number="£ 200.21"
            percent="9.6%"
            icon={ArrowDropDownIcon}
            iconColor="red"
          />
        </Box>
        <Box key="9">
          <CardComponent
            title="SMS costs"
            number="£ 234.21"
            percent="0.2%"
            icon={ArrowDropDownIcon}
            iconColor="red"
          />
        </Box>
        <Box
          key="10"
          sx={{
            border: "2px solid #E7EAF4 ",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 8,
          }}
        >
          <AreaComponent
            AreaData={AreaData}
            XDataKey="name"
            dataKey1="pv"
            dataKey2="uv"
          />
        </Box>
        <Box
          key="11"
          sx={{
            border: "2px solid #E7EAF4 ",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 8,
          }}
        >
          <RaderChart
            RaderData={RaderData}
            PolarDataKey="item"
            name1="Apple"
            dataKey1="A"
            name2="Samsung"
            dataKey2="B"
          />
        </Box>
        <Box
          key="12"
          sx={{
            border: "2px solid #E7EAF4 ",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 8,
          }}
        >
          <ComposedComponent
            data={AreaData}
            dataKey="name"
            AreaDataKey="pv"
            BarDataKey="uv"
            LineDataKey="amt"
          />
        </Box>
      </ResponsiveGridLayout>
    </Box>
  );
};

export default Reporting;
