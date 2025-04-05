import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google"; // Placeholder for Google Certified icon
import AndroidIcon from "@mui/icons-material/Android"; // Placeholder for Android icon
import WifiIcon from "@mui/icons-material/Wifi"; // Placeholder for Dual WiFi icon

// Styled component for the hero section with gradient background
const HeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "left",
  background: "linear-gradient(45deg, #e0f7e9 0%,rgb(92, 185, 134) 100%)", // Gradient matching the image
  position: "relative",
  overflow: "hidden",
}));

// Styled component for the content container
const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
 
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));


const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              color: "#333",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
