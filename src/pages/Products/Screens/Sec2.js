import React from "react";
import { Box, Grid, Typography, Container, useMediaQuery, useTheme, Chip } from "@mui/material";
import RocketIcon from "@mui/icons-material/RocketLaunch";
import GridViewIcon from "@mui/icons-material/GridView";
import LoopIcon from "@mui/icons-material/Loop";
import screenImage from "../../../Assets/Products/main/multitasking.png"; // Update to match your path

const featureList = [
  {
    icon: <RocketIcon sx={{ fontSize: 40, color: "#006400" }} />,
    title: "Quick Launch",
    description: "Simply long press the app icon on the desktop",
  },
  {
    icon: <GridViewIcon sx={{ fontSize: 40, color: "#006400" }} />,
    title: "Multi-Tasking",
    description: "Improve productivity with up to 4 apps running simultaneously",
  },
  {
    icon: <LoopIcon sx={{ fontSize: 40, color: "#006400" }} />,
    title: "Smooth Switching",
    description: "Boost creativity without interruption",
  },
];

const MultiWindowTasking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: isMobile ? 4 : 8, backgroundColor: "#FAFFFC" }}>
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#1F2937",
            mb: 4,
            textAlign: "center",
          }}
        >
          Multi-Window Tasking
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {featureList.map((item, index) => (
            <Grid item xs={12} sm={4} key={index} textAlign="center">
              {item.icon}
              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  color: "#1F2937",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Roboto, sans-serif", color: "#4B5563", mt: 1 }}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Screen Image with App Labels */}
        <Box
          sx={{
            mt: 6,
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={screenImage}
            alt="Smart Screen Multi-Tasking"
            sx={{
              width: "100%",
              maxWidth: 800,
              height: "auto",
              borderRadius: 4,
              boxShadow: 3,
            }}
          />

          {/* Overlay Labels */}
          <Chip
            label="Browser"
            sx={{
              position: "absolute",
              top: "12%",
              left: "12%",
              backgroundColor: "#4B5563",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Screen Cast"
            sx={{
              position: "absolute",
              top: "36%",
              left: "12%",
              backgroundColor: "#4B5563",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Whiteboard"
            sx={{
              position: "absolute",
              bottom: "12%",
              right: "20%",
              backgroundColor: "#4B5563",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Photo Gallery"
            sx={{
              position: "absolute",
              top: "12%",
              right: "18%",
              backgroundColor: "#4B5563",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultiWindowTasking;
