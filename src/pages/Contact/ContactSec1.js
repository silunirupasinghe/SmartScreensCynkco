import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImage from "../../Assets/hero.jpg"

// Styled component for the hero section with gradient and background image
const HeroSection = styled(Box)(({ theme }) => ({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
}));

// Styled component for the content container
const HeroContent = styled(Box)(({ theme }) => ({
  width: "100%", // Changed from maxWidth to ensure full width
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
              background: "linear-gradient(30deg, #0D47A1, #006400)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              mb: 2,
              textAlign: "center",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#555", // Changed to black
              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)", // Light shadow for contrast
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            "We're here to help you connect and grow."
          </Typography>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;