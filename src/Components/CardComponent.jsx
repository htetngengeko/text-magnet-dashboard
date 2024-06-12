import { Box, Card, CardContent, Typography } from "@mui/material";

const CardComponent = ({
  title,
  number,
  percent,
  icon: IconComponent,
  iconColor,
  currency: CurrencyIcon,
}) => {
  return (
    <Card sx={{ height: "100%", border: "1px solid #E7EAF4", boxShadow: 8 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, color: "secondary.main" }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "self-end",
          }}
        >
          <Typography variant="h3" sx={{ mr: 2, color: "secondary.main" }}>
            {number}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <IconComponent sx={{ color: iconColor }} />
            <Typography>{percent}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
