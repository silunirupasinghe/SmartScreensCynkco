import React, {useEffect} from "react";
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
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Image assets
import CT011 from "../../../Assets/Products/Accessories/pen.png";
import CT16A from "../../../Assets/Products/Accessories/SharableDongal.png";
import CT20 from "../../../Assets/Products/Accessories/speakers.png";

// Hero section
import AccessoryHero from "./AccessoryHero";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#006400";

// Styled Card with improved design
const AccessoryCard = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  height: "100%",
  margin: "auto",
  borderRadius: 16,
  border: `1px solid ${greenDark}`,
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

// Accessory data
const accessories = [
  {
    name: "CT-011 Laser Pen",
    image: CT011,
    description: `The CT-011 Laser Pen is a versatile tool for interactive presentations, featuring keystrokes for annotation, page navigation, and whiteboard control. With a 20-meter effective distance and 8-12 hours of battery life (320mAh), it ensures seamless operation. Its lightweight design (26g) and indicator lights make it ideal for educational and professional settings.`,
  },
  {
    name: "CT-16A Screen Transmitter",
    image: CT16A,
    description: `The CT-16A Screen Transmitter enables wireless screen sharing with a 12-meter range, supporting resolutions up to 2560x1440@25Hz with touch return. Featuring Bluetooth 5.2 and Wi-Fi 802.11ax (5 GHz), it ensures seamless connectivity with a transmission delay of ≤120ms. Compatible with Windows 7/10/11 and Mac OS 10.12+, it’s perfect for interactive sessions in classrooms and meeting rooms.`,
  },
  {
    name: "CT-20 External Mic",
    image: CT20,
    description: `The CT-20 External Mic is a high-performance conference microphone with an 8-microphone array and 6-meter pickup range, ideal for meeting rooms (up to 8m x 10m in cascade mode). Featuring Bluetooth 5.3, full-duplex audio, and noise suppression, it ensures crystal-clear communication. Compatible with Zoom, Microsoft Teams, and more, it’s perfect for professional video conferencing.`,
  },
];

const AccessoriesPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);
  return (
    <Box>
      {/* Hero Section */}
      <AccessoryHero />

      {/* Accessories Section */}
      <Box sx={{ background: "#FAFFFC", py: { md: 8, xs: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
            {accessories.map((product, index) => (
              <Grid item size={{ md: 4, sm: 12 }} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <AccessoryCard>
                    {/* Image */}
                    <CardMedia
                      component="div" // change from "img" to "div" so we can style it
                      sx={{
                        height: 220,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#fff",
                        borderBottom: `1px solid ${greenDark}`,
                        p: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </CardMedia>

                    {/* Content */}
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          color: greenDark,
                          mb: 1.5,
                          fontSize: { xs: "1.2rem", md: "1.4rem" },
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#444",
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>

                    {/* Action Button */}
                    <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                      <Button
                        variant="contained"
                        component={Link}
                        to="/contact"
                        sx={{
                          backgroundColor: greenDark,
                          color: "#fff",
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: "0.95rem",
                          px: 4,
                          py: 1.2,
                          borderRadius: "10px",
                          "&:hover": {
                            backgroundColor: green,
                          },
                        }}
                      >
                        Inquire Now
                      </Button>
                    </CardActions>
                  </AccessoryCard>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AccessoriesPage;
