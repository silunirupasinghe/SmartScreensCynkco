import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import ScreenHero from "../Screens/ScreenHero.js";
import { Link } from "react-router-dom";
import colors from "../../../theme/colors"; // Adjust path to match your project structure

// Import Google Fonts via @fontsource
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text

import CTSC65A from "../../../Assets/Products/Screens/CT-SC65A.png";
import CTSC65WC from "../../../Assets/Products/Screens/CTSC65WC/CT-SC65WC.png";
import CTSC75WC from "../../../Assets/Products/Screens/CTSC75WC/CT-SC75WC.png";
import CTSC75A from "../../../Assets/Products/Screens/CTSC75A/CTSC75A.png";
import CTSC86WC from "../../../Assets/Products/Screens/CT-SC86WC.png";
import CTSC85A from "../../../Assets/Products/Screens/CT-SC85A.png";

// Styled Card component with fixed size, hover effect, and darkBlue border
const ProductCard = styled(Card)(({ theme }) => ({
  height: 450, // Fixed height for all cards
  margin: "auto",
  borderRadius: 5,
  transition: "transform 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column", // Ensure content fits within fixed height

  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

// Styled Button for category selection
const CategoryButton = styled(Button)(({ theme, active }) => ({
  color: active ? colors.darkBlue : "#000000",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  textTransform: "none",
  px: 6,
  py: 1,
  m: 2,
  borderRadius: "15px",
  border: `2px solid ${active ? colors.darkBlue : "#000000"}`,
  "&:hover": {
    backgroundColor: colors.darkBlue,
    color: "#ffffff",
  },
  margin: theme.spacing(1),
}));

// Product Data with shortened descriptions, separated into two categories
const singleSystemNoCamera = [
  {
    name: "CT-SC65A",
    image: CTSC65A,
    description:
      "A 65-inch 4K Ultra HD SmartScreen with high-precision touch and wireless screen sharing, great for interactive presentations.",
    url: "/products/smart-screens/ct-sc65a",
  },
  {
    name: "CT-SC75A",
    image: CTSC75A,
    description:
      "A 75-inch 4K Ultra HD display with dual-pen writing and wireless screen transfer, ideal for team brainstorming.",
    url: "/products/smart-screens/ct-sc75a",
  },
  {
    name: "CT-SC85A",
    image: CTSC85A,
    description:
      "An 86-inch 4K Ultra HD SmartScreen with precise touch and wireless sharing, perfect for interactive meeting spaces.",
    url: "/products/smart-screens/ct-sc85a",
  },
];

const dualSystemWithCamera = [
  {
    name: "CT-SC65WC",
    image: CTSC65WC,
    description:
      "A 65-inch 4K Ultra HD SmartScreen with a 48MP camera and 8-array mic, ideal for video conferencing and collaborative work.",
    url: "/products/smart-screens/ct-sc65wc",
  },
  {
    name: "CT-SC75WC",
    image: CTSC75WC,
    description:
      "A 75-inch 4K Ultra HD display with a 48MP camera and dual-pen writing, perfect for virtual meetings and team collaboration.",
    url: "/products/smart-screens/ct-sc75wc",
  },
  {
    name: "CT-SC86WC",
    image: CTSC86WC,
    description:
      "An 86-inch 4K Ultra HD display with a 48MP camera and high-precision touch, suited for large-scale video conferencing.",
    url: "/products/smart-screens/ct-sc86wc",
  },
];

const ScreensPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const [selectedCategory, setSelectedCategory] = useState("single"); // Default to single system

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine which products to display based on selected category
  const productsToDisplay =
    selectedCategory === "single" ? singleSystemNoCamera : dualSystemWithCamera;

  return (
    <Box>
      {/* Hero Section */}
      <ScreenHero />

      {/* Category Selection and Product Cards Section */}
      <Box
        sx={{

          mt: { xs: 4, md: 6 }, // Negative margin to overlap with hero
          pb: { md: 6, xs: 4 }, // Padding bottom for spacing
          position: "relative", // Ensure proper stacking context
        }}
      >
        <Container maxWidth="lg">
          {/* Category Selector */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            <CategoryButton
              active={selectedCategory === "single"}
              onClick={() => setSelectedCategory("single")}
            >
              Single System without Camera
            </CategoryButton>
            <CategoryButton
              active={selectedCategory === "dual"}
              onClick={() => setSelectedCategory("dual")}
            >
              Dual System with Camera
            </CategoryButton>
          </Box>

          {/* Product Cards */}
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: colors.darkBlue,
              textAlign: "center",
              mb: 4,
            }}
          >
            {selectedCategory === "single"
              ? "Single System without Camera"
              : "Dual System with Camera"}
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
            {productsToDisplay.map((screen, index) => (
              <Grid item xs={12} sm={6} md={4} key={screen.name}>
                <Fade in timeout={1000 + index * 200}>
                  <ProductCard
                    sx={{
                      width: isMobile ? 290 : 350, // Dynamic width based on screen size
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200" // Fixed image height within card
                      image={screen.image}
                      alt={screen.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins, sans-serif", // Google Font: Poppins
                          fontWeight: 700, // Bold
                          color: colors.darkBlue,
                          mb: 1.5,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {screen.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Roboto, sans-serif", // Google Font: Roboto
                          fontWeight: 400, // Regular
                          color: "#333",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {screen.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button
                        variant="contained"
                        component={Link}
                        to={screen.url}
                        sx={{
                          backgroundColor: colors.darkBlue,
                          color: "#fff",
                          fontFamily: "Poppins, sans-serif", // Apply Poppins to button
                          fontWeight: "bold",
                          textTransform: "none",
                          px: 3,
                          py: 1,
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: colors.lightBlue,
                          },
                        }}
                      >
                        More
                      </Button>
                    </CardActions>
                  </ProductCard>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ScreensPage;