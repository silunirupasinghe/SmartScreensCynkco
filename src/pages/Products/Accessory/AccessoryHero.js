import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImage from "../../../Assets/hero.jpg"; // Update if you want a different background for accessories

// Hero section with background image and gradient styling
const HeroSection = styled(Box)(({ theme }) => ({
  height: "75vh",
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

// Content wrapper
const HeroContent = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4),
  
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AccessoriesHero = () => {
  return (
    <HeroSection>
      <Container maxWidth="md">
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
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Smart Screen Accessories
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#333",
              px: { xs: 2, md: 0 },
            }}
          >
            Enhance your interactive experience with high-performance accessories—<br />
            designed for smooth integration, collaboration, and productivity.
          </Typography>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default AccessoriesHero;
