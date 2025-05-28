import React from "react";
import { Box, Typography, Container  } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImage from "../../../Assets/hero.jpg"

import colors from "../../../theme/colors"; // Adjust path to match your project structure

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
              background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              mb: 2,
              textAlign: "center",
            }}
          >
           SMART SCREENS
          </Typography>
          <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#555",
            px: { xs: 2, md: 0 },
          }}
        >
          "Explore Interactive Displays, Smart Boards & Robust Display Stands <br/>for
          Seamless Business & Education Experiences"
        </Typography>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
