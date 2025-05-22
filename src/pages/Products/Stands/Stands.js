import React, {useEffect} from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";

// Images (local file paths from uploads)
import CT590 from "../../../Assets/Products/CT-590.png";
import CT1700 from "../../../Assets/Products/CT-1700.png";
import CT1800 from "../../../Assets/Products/CT-1800.png";
import CT2100 from "../../../Assets/Products/CT-2100.png";
import ProductHeroSection from "./StandHero";

import colors from "../../../theme/colors";


const products = [
  {
    name: "CT-590 (Black)",
    image: CT590,
    description: `The CT-590 (Black) is a heavy-duty stand built to support large displays ranging from 86 to 120 inches. Engineered for professional use, it offers a robust 200KG load capacity and features a full 360° horizontal rotation for flexible screen orientation. The cold-rolled steel frame ensures long-lasting stability, while thoughtful additions like the wire harness card design and an integrated storage box make it perfect for organized and efficient environments. With a TV center height of 1450mm and a wide hole distance range from 200x200mm to 1200x600mm, this stand offers precision and adaptability for premium setups.`,
  },
  {
    name: "CT-1700",
    image: CT1700,
    description: `The CT-1700 is a compact yet rugged smart stand crafted for displays between 32 and 70 inches. Designed with flexibility in mind, it features a lifting range from 1250 to 1500mm and a strong frame capable of holding up to 100KG. Its cold-rolled steel body ensures durability, while the included camera tray and center tray make it ideal for smaller collaborative settings, such as classrooms or compact conference rooms. The stand also accommodates varied VESA mounting patterns, making it a versatile choice for dynamic display applications.`,
  },
  {
    name: "CT-1800",
    image: CT1800,
    description: `Built for performance and ergonomic precision, the CT-1800 supports medium to large displays ranging from 42 to 86 inches. With a lifting range of 1100 to 1500mm and a load capacity of 200KG, this stand is a top-tier choice for dynamic display environments. Its solid cold-rolled steel structure, along with camera and center tray inclusions, make it well-suited for education, boardrooms, and digital signage. Supporting hole distances up to 1140mm horizontally and 630mm vertically, the CT-1800 ensures compatibility with a wide range of screens.`,
  },
  {
    name: "CT-2100",
    image: CT2100,
    description: `Engineered for high-impact visual environments, the CT-2100 supports large displays between 52 and 120 inches. With a 200KG weight capacity and adjustable lifting range of 1100 to 1500mm, this stand offers strength and flexibility for large-scale presentations. Crafted from durable cold-rolled steel, it includes both a camera tray and center tray for seamless integrations. The wide hole distance compatibility ensures effortless mounting, while its sleek structure makes it a reliable asset in professional AV setups.`,
  },
];

const StandsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  return (
    <Box>
      <ProductHeroSection />
      <Box sx={{ background: "#FAFFFC", py: { xs: 3, sm: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {products.map((product, index) => (
            <Fade in key={index} timeout={1000}>
              <Box>
                <Grid
                  container
                  spacing={{ xs: 2, sm: 4, md: 7 }} // Responsive spacing
                  alignItems="center"
                  sx={{
                    mb: { xs: 4, sm: 6, md: 10 }, // Responsive margin-bottom
                    px: { xs: 1, sm: 2 }, // Responsive padding-x
                    py: { xs: 1, sm: 2 }, // Responsive padding-y
                    flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
                  }}
                >
                  {/* Image Section */}
                  <Grid item size={{ sm: 12, md: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center", // Center image on smaller screens
                      }}
                    >
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: "100%",
                          maxWidth: { xs: "300px", sm: "400px", md: "500px" }, // Responsive max-width
                          height: "auto",
                          display: "block",
                          borderRadius: 2,
                          objectFit: "contain", // Ensure image fits without distortion
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Description Section */}
                  <Grid item size={{ sm: 12, md: 6 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        color: colors.darkBlue,
                        mb: { xs: 1, sm: 2 }, // Responsive margin-bottom
                        fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, // Responsive font size
                        textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 2, sm: 3 }, // Responsive margin-bottom
                        fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                        color: "#333",
                        lineHeight: 1.7,
                        textAlign: { xs: "justify", md: "justify" }, // Justify text
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" }, // Center button on mobile
                      }}
                    >
                      <Button
                        variant="contained"
                        component={Link}
                        to="/contact"
                        sx={{
                          backgroundColor: colors.darkBlue,
                          color: "#fff",
                          fontWeight: "bold",
                          textTransform: "none",
                          px: { xs: 3, sm: 4 }, // Responsive padding-x
                          py: { xs: 1, sm: 1.2 }, // Responsive padding-y
                          fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: colors.lightBlue,
                          },
                        }}
                      >
                        Inquire Now
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                {/* Horizontal Line (Divider) */}
                {index < products.length - 1 && (
                  <Divider
                    sx={{
                      my: { xs: 2, sm: 3, md: 4 }, // Responsive margin
                      borderColor: colors.darkBlue,
                      borderWidth: 0.5,
                    }}
                  />
                )}
              </Box>
            </Fade>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default StandsPage;
