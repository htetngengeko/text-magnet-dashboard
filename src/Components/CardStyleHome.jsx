import { Box, Typography, useTheme } from "@mui/material";

const CardStyleHome = ({ icon: IconComponent, text, count, iconColor }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <IconComponent
        sx={{ fontSize: { lg: 80, md: 70, sm: 40, xs: 30 }, color: iconColor }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          ml: 2,
        }}
      >
        <Typography>{text}</Typography>
        <Typography
          sx={{
            fontSize: {
              lg: theme.typography.h5.fontSize,
              md: theme.typography.h6.fontSize,
              sm: theme.typography.h4.fontSize,
            },
          }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardStyleHome;
