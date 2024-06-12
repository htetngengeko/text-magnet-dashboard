import { Payment } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Link } from "react-router-dom";
import AccordionComponent from "../AccordionComponent";

const ResponsiveGridLayout = WidthProvider(Responsive);

const containerStyle = {
  backgroundImage: 'url("/FAQbg.svg")',
  backgroundSize: "cover",
  backgroundPosition: "rotate",
  backgroundRepeat: "no-repeat",
  p: 2,
};
const paymentItems = [
  {
    id: 1,
    icon: <DeliveryDiningIcon />,
    title: "Delivery",
  },
  {
    id: 2,
    icon: <AutorenewIcon />,
    title: "Cancellation & Return",
  },
  {
    id: 3,
    icon: <ArchiveIcon />,
    title: "My Orders",
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    title: "Product & Services",
  },
];
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover .MuiListItem-root": {
    color: "#00B7BF",
  },
}));

export const responsiveProps = {
  isDraggable: false,
  isResizable: false,
  rowHeight: 20,
  className: "responsive-grid",
  breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480 },
  cols: { lg: 3, md: 3, sm: 2, xs: 1 },
  layouts: {
    lg: [
      { i: "1", x: 0, y: 0, w: 3, h: 10 },
      { i: "2", x: 0, y: 10, w: 1, h: 15 },
      { i: "3", x: 2, y: 0, w: 2, h: 15 },
      { i: "4", x: 0, y: 25, w: 3, h: 4 },
      { i: "5", x: 0, y: 29, w: 1.5, h: 3 },
      { i: "6", x: 1.5, y: 29, w: 1.5, h: 3 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 3, h: 10 },
      { i: "2", x: 0, y: 10, w: 1, h: 15 },
      { i: "3", x: 1, y: 10, w: 2, h: 15 },
      { i: "4", x: 0, y: 25, w: 3, h: 3 },
      { i: "5", x: 0, y: 28, w: 1.5, h: 3 },
      { i: "6", x: 1.5, y: 28, w: 1.5, h: 3 },
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 2, h: 10 },
      { i: "2", x: 0, y: 10, w: 1, h: 15 },
      { i: "3", x: 1, y: 10, w: 1, h: 15 },
      { i: "4", x: 0, y: 25, w: 2, h: 3 },
      { i: "5", x: 0, y: 28, w: 1, h: 3 },
      { i: "6", x: 1, y: 28, w: 1, h: 3 },
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 1, h: 10 },
      { i: "2", x: 0, y: 10, w: 1, h: 15 },
      { i: "3", x: 0, y: 25, w: 1, h: 15 },
      { i: "4", x: 0, y: 40, w: 1, h: 3 },
      { i: "5", x: 0, y: 43, w: 1, h: 4 },
      { i: "6", x: 0, y: 46, w: 1, h: 4 },
    ],
  },
};
const FAQ = () => {
  const theme = useTheme();
  return (
    <Box sx={containerStyle}>
      <ResponsiveGridLayout {...responsiveProps}>
        <Box
          key="1"
          sx={{
            border: "1px solid #E7EAF4",
            boxShadow: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundImage: 'url("/8720926.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: theme.typography.h4.fontSize,
                md: theme.typography.h5.fontSize,
                sm: theme.typography.h5.fontSize,
              },
            }}
          >
            Hello! How can we help?
          </Typography>
          <Typography>
            or choose a category to quickly find the help you need
          </Typography>
          <TextField
            label="Ask Question"
            variant="outlined"
            sx={{
              width: { lg: "500px", md: "400px", sm: "200px", xs: "200px" },
            }}
          />
        </Box>
        <Box key="2">
          <Card sx={{ height: "100%" }}>
            <CardHeader
              title="Payment"
              sx={{
                bgcolor: "#FFDC6A",
                height: "25px",
                color: "secondary.main",
                fontSize: "h6",
                boxShadow: 6,
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {paymentItems.slice(0, 9).map((paymentItem) => {
                  return (
                    <StyledLink to="" key={paymentItem.id}>
                      <ListItem sx={{ color: "#2D2B3F" }}>
                        <ListItemIcon sx={{ color: "#2D2B3F" }}>
                          {paymentItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={paymentItem.title} />
                      </ListItem>
                    </StyledLink>
                  );
                })}
              </Box>

              <CardMedia
                component="img"
                height="194"
                image="person.jpg"
                alt="Paella dish"
                sx={{
                  width: "80%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </CardContent>
          </Card>
        </Box>
        <Box key="3" sx={{ p: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: 56, height: 56, bgcolor: "#00B7BF", opacity: "0.5" }}
            >
              <Payment />
            </Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                ml: 3,
              }}
            >
              <Typography variant="h6">Payment</Typography>
              <Typography>Get help with payment</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, pr: 5 }}>
            <AccordionComponent
              aSummary={"Why my rate is lower?"}
              aDetails={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget."
              }
            />
            <AccordionComponent
              aSummary={"How do I pay my order?"}
              aDetails={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget."
              }
            />
            <AccordionComponent
              aSummary={"How can I reset my sccount?"}
              aDetails={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget."
              }
            />
            <AccordionComponent
              aSummary={"What license do I need for end products?"}
              aDetails={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget."
              }
            />
            <AccordionComponent
              aSummary={"Do my subscribtion automically renew?"}
              aDetails={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget."
              }
            />
          </Box>
        </Box>
        <Box
          key="4"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            mb: 2,
          }}
        >
          <Chip label="Questions" sx={{ bgcolor: "#FFDB48" }} />
          <Typography variant="h5">You still have questions?</Typography>
          <Typography>
            If you cannot find a question in our FAQ, you can always contact us.
            We will answer you shortly!
          </Typography>
        </Box>
        <Box
          key="5"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LocalPhoneIcon />
          <Typography>+95 9985747832</Typography>
          <Typography>We are always happy to help you.</Typography>
        </Box>
        <Box
          key="6"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <EmailIcon />
          <Typography>hello@help.com</Typography>
          <Typography>Best way to get answer faster!</Typography>
        </Box>
      </ResponsiveGridLayout>
    </Box>
  );
};

export default FAQ;
