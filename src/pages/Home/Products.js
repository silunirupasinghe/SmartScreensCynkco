import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CTSC65WC from "../../Assets/Products/Screens/CTSC65WC/CT-SC65WC.png";
import accessories from "../../Assets/Home/acc.jpg";
import Stands from "../../Assets/Home/screen1.png";


function Products() {
  const greenDark = "#006400";
  const products = [
    {
      name: "Smart Screens",
      description:
        "65-inch 4K interactive flat panel with 40-point touch, dual-pen writing, and advanced collaboration tools for seamless productivity.",
      image: CTSC65WC,
      link: "/products/smart-screens",
    },
    {
      name: "Screen Stands",
      description:
        "Adjustable, sturdy stands designed to support smart screens, offering mobility and ergonomic positioning for versatile use.",
      image: Stands,
      link: "/products/screen-stands",
    },
    {
      name: "Accessories",
      description:
        "Essential add-ons including stylus pens, wall mounts, and connectivity cables to enhance your smart screen experience.",
      image: accessories,
      link: "/products/accessories",
    },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            mb: 5,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" },
            lineHeight: 1.3,
            background: "linear-gradient(45deg, #006400, #0D47A1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Product Spotlight
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  position: "relative",
                  border: `1px solid ${greenDark}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: 300,
                  height: 400, // Fixed height for the card
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column", // Make card a flex container
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />

                <CardContent
                  sx={{
                    textAlign: "left",
                    flex: 1, // Allow CardContent to take remaining space
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Push content and button apart
                    p: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        color: "#1D6B44",
                        mb: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#757575",
                        mb: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3, // Limit to 3 lines
                        WebkitBoxOrient: "vertical",
                        flexGrow: 1, // Allow description to take available space
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Box>
                  <Button
                    component={Link}
                    to={product.link}
                    sx={{
                      backgroundColor: "#006400",
                      color: "#FFFFFF",
                      textTransform: "none",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#24AC4C",
                      },
                      alignSelf: "flex-start", // Align button to the left
                    }}
                  >
                    More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

       
      </Container>
    </Box>
  );
}

export default Products;