import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import screen1 from "../../Assets/Home/screen1.png";
import googleIcons from "../../Assets/Home/google.png";
import accessories from "../../Assets/Home/accessories.png";
import wifi from "../../Assets/Home/wifi.png";

import colors from "../../theme/colors";
// Updated Product Data with CT-SC65WC focus and additional features
const productData = [
  { id: 1, title: "CT-SC65WC", image: screen1 }, // Flagship product
  { id: 2, title: "Google's Ecosystem", image: googleIcons }, // Complementary displays
  { id: 3, title: "Collaboration Tools", image: wifi }, // Touch, camera, mic, etc.
  {
    id: 4,
    title: "Accessories",
    image: accessories,
  },
];

const HomeSec3 = () => {
  const [activeId, setActiveId] = useState(1);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // <900px

  useEffect(() => {
    setActiveId(1); // Initial card selection highlights CT-SC65WC
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, bgcolor: "#FAFFFC" }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.5rem" },
          lineHeight: 1.2,
          background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`, // Use colors from colors.js
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CYNKCO: Inspire. Innovate. Collaborate.
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          justifyContent: "center",
          textAlign: "justify",
          mx: "auto",
          maxWidth: "900px",
          mb: 5,
          color: "#555",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
        }}
      >
        CYNKCO redefines smart display technology with the CT-SC65WC, featuring
        android 13.0, a 4K anti-glare display, and dual-pen collaboration tools.
        Combined with dynamic video walls, advanced connectivity options like
        100Gb Ethernet, and essential accessories, CYNKCO solutions empower
        seamless interaction and productivity in education, healthcare,
        corporate, and public environments.
      </Typography>

      {/* Swiper for Small & Medium Screens */}
      {isMediumScreen ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={isSmallScreen ? 1 : 2}
          spaceBetween={20}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "30px" }}
        >
          {productData.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mx: "auto",
                  maxWidth: 300,
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    mb: 2,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  fontFamily="Poppins, sans-serif"
                  fontWeight={600}
                  color="#006400"
                  fontSize="1.1rem"
                >
                  {product.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop Grid Layout with Hover Effects
        <Grid container justifyContent="center">
          {productData.map((product) => {
            const isActive = activeId === product.id;
            return (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={isActive ? 6 : 3}
                onMouseEnter={() => setActiveId(product.id)}
                sx={{
                  transition: "all 0.5s ease",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    height: 300,
                    borderRadius: 3,
                    bgcolor: isActive ? colors.blue : "#F7FDFC",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 3,
                    transition: "all 0.4s ease",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      maxHeight: isActive ? 220 : 150,
                      objectFit: "contain",
                      mb: 1,
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                  <Typography
                    variant={isActive ? "h6" : "subtitle1"}
                    fontFamily="Poppins, sans-serif"
                    fontWeight={600}
                    align="center"
                    sx={{
                      color: isActive ? colors.darkBlue : "#666",
                      fontSize: isActive ? "1.1rem" : "1rem",
                    }}
                  >
                    {product.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default HomeSec3;
