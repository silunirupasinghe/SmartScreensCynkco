import React from "react";
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

// Import Google Fonts via @fontsource
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text

import CTSC65A from "../../../Assets/Products/Screens/CT-SC65A.png";
import CTSC65WC from "../../../Assets/Products/Screens/CT-SC65WC.png";
import CTSC75WC from "../../../Assets/Products/Screens/CT-SC75WC.png";
import CTSC75A from "../../../Assets/Products/Screens/CT-SC75A.png";
import CTSC86WC from "../../../Assets/Products/Screens/CT-SC86WC.png";
import CTSC85A from "../../../Assets/Products/Screens/CT-SC85A.png";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#006400";

// Styled Card component with fixed size, hover effect, and greenDark border
const ProductCard = styled(Card)(({ theme }) => ({
  height: 450, // Fixed height for all cards
  margin: "auto",
  borderRadius: 5,
  border: `1px solid ${greenDark}`, // Set border with greenDark color
  transition: "transform 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column", // Ensure content fits within fixed height
  backgroundColor: "#fff", // Ensure card background is white for contrast
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

// Product Data with shortened descriptions
const screens = [
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
    name: "CT-SC65A",
    image: CTSC65A,
    description:
      "A 65-inch 4K Ultra HD SmartScreen with high-precision touch and wireless screen sharing, great for interactive presentations.",
    url: "/products/smart-screens/ct-sc65a",
  },
  {
    name: "CT-SC86WC",
    image: CTSC86WC,
    description:
      "An 86-inch 4K Ultra HD display with a 48MP camera and high-precision touch, suited for large-scale video conferencing.",
    url: "/products/smart-screens/ct-sc86wc",
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

const ScreensPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px

  // Log screens to debug image sources
  React.useEffect(() => {
    console.log("Screens data:", screens);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <ScreenHero />

      {/* Product Cards Section with Overlap */}
      <Box
        sx={{
          background: "#FAFFFC",
          mt: { xs: 4, md: 6}, // Negative margin to overlap with hero
          pb: { md: 6, xs: 4 }, // Padding bottom for spacing
          position: "relative", // Ensure proper stacking context
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
            {screens.map((screen, index) => (
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
                          color: greenDark,
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
                          backgroundColor: greenDark,
                          color: "#fff",
                          fontFamily: "Poppins, sans-serif", // Apply Poppins to button
                          fontWeight: "bold",
                          textTransform: "none",
                          px: 3,
                          py: 1,
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: green,
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