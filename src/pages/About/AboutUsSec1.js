import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImage from "../../Assets/hero.jpg";

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
}));

// Styled component for the content container
const HeroContent = styled(Box)(({ theme }) => ({
  width: "auto", // Changed from maxWidth to ensure full width
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const SolutionSec1 = () => {
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
            About US
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
            "Comprehensive Solutions with CYNKCO Smartboards"
          </Typography>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default SolutionSec1;
