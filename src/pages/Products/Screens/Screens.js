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
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import ScreenHero from "../Screens/ScreenHero.js";
import { Link } from "react-router-dom";
import colors from "../../../theme/colors";

// Import Google Fonts via @fontsource
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text

// Images
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

// Define the collections
const collections = [
  {
    name: "Single System without Camera",
    products: [
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
    ],
  },
  {
    name: "Dual System with Camera",
    products: [
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
    ],
  },
];

const ScreensPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px
  const [activeTab, setActiveTab] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <ScreenHero />

      {/* Tabs and Product Cards Section */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 }, // Negative margin to overlap with hero
          pb: { md: 6, xs: 4 }, // Padding bottom for spacing
          position: "relative", // Ensure proper stacking context
        }}
      >
        <Container maxWidth="lg">
          {/* Tabs for Collections */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered={!isMobile} // Centered on larger screens, scrollable on mobile
            variant={isMobile ? "scrollable" : "standard"} // Scrollable on mobile
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              "& .MuiTab-root": {
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: {
                  xs: "0.8rem", // Smaller font for mobile
                  sm: "0.9rem", // Medium font for tablet
                  md: "1.1rem", // Larger font for desktop
                },
                color: colors.darkBlue,
                textTransform: "none",
                px: { xs: 1, sm: 1, md: 4 }, // Responsive padding
                minWidth: { xs: 100, sm: 160, md: 200 }, // Ensure tabs don't shrink too much
              },
              "& .Mui-selected": {
                color: colors.lightBlue,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: colors.lightBlue,
              },
              "& .MuiTabs-scrollButtons": {
                color: colors.darkBlue,
                "&.Mui-disabled": {
                  opacity: 0.3,
                },
              },
            }}
          >
            {collections.map((collection, index) => (
              <Tab key={index} label={collection.name} />
            ))}
          </Tabs>

          {/* Product Cards */}
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              color: colors.darkBlue,
              textAlign: "center",
              mb: 4,
            }}
          >
            {collections[activeTab].name}
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
            {collections[activeTab].products.map((screen, index) => (
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
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 700,
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
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 400,
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
                          fontFamily: "Poppins, sans-serif",
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