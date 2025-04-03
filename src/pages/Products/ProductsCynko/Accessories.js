import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Fade } from "@mui/material";

// Replace these with actual image paths for the accessories
import CT011 from "../../../Assets/Products/Accessories/pen.png";
import CT16A from "../../../Assets/Products/Accessories/SharableDongal.png";
import CT20 from "../../../Assets/Products/Accessories/speakers.png";
import ProductHeroSection from "./ProductHero"; // Reuse your hero section

const green = "#24AC4C";
const greenDark = "#388E3C";
const pink = "#E91E63";

const accessories = [
  {
    name: "CT-011 Sliding Track",
    image: CT011,
    description: `The CT-011 Sliding Track offers a seamless solution for integrating interactive flat panels into wall systems. With a robust aluminum build and high-precision slide rail, it ensures smooth horizontal mobility. Designed for flexibility and safety, it's ideal for educational and corporate environments that demand adaptable and space-saving configurations.`,
  },
  {
    name: "CT-16A Pen Tray",
    image: CT16A,
    description: `The CT-16A Pen Tray is a sleek and functional storage accessory, engineered to hold multiple stylus pens and erasers. Crafted from high-strength ABS and aluminum alloy, it provides easy access during interactive sessions. Its universal fit and magnetic attachment make it a must-have for streamlined digital collaboration.`,
  },
  {
    name: "CT-20 Camera Bracket",
    image: CT20,
    description: `The CT-20 Camera Bracket is a durable and adjustable mount designed to securely hold conference cameras on top of flat panels. It supports precise positioning and a wide compatibility range, making it perfect for enhancing video conferencing setups in professional meeting rooms and digital classrooms.`,
  },
];

const AccessoriesPage = () => {
  return (
    <Box>
      <ProductHeroSection />
      <Box sx={{ background: "#FAFFFC", py: { md: 6, xs: 4 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              mb: { md: 6, xs: 3, sm: 1 },
              textAlign: "center",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.3rem" },
              lineHeight: { md: 1.2 },
              background: "linear-gradient(45deg, #006400, #0D47A1 )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Smart Screen Accessories
          </Typography>

          {accessories.map((product, index) => (
            <Fade in key={index} timeout={1000}>
              <Grid
                container
                spacing={7}
                alignItems="center"
                sx={{ mb: { md: 10, xs: 2 }, px: { xs: 2, sm: 2 }, py: { xs: 2 } }}
              >
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                  <Box>
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        display: "block",
                        border: `2px solid ${green}`,
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Grid>

                {/* Description Section */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: pink,
                      mb: 2,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.7,
                      textAlign: "justify",
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: green,
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      px: 4,
                      py: 1.2,
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: greenDark,
                      },
                    }}
                  >
                    Inquire Now
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default AccessoriesPage;
