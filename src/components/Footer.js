import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { styled } from "@mui/system";
import colors from "../theme/colors";

// Theme Colors (aligned with CYNKCO branding)

const textColor = "#E0E0E0"; // Light gray for text

// Styled Footer Container
const FooterContainer = styled(Box)({
  backgroundColor: colors.footerBlue, // Dark green
  color: textColor,
  padding: "2rem 0",
  display: "flex", // Add flexbox for vertical centering
  flexDirection: "column",
  alignItems: "center", // Center content horizontally
  minHeight: "100%", // Ensure it takes full height if needed
});

// Styled Links
const FooterLink = styled(Link)({
  color: textColor,
  textDecoration: "none",
  fontSize: "0.75rem",
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "400",
  transition: "color 0.3s",
  "&:hover": {
    color: colors.blue,
    textDecoration: "underline",
  },
});

// Styled External Link for "Developed by"
const ExternalLink = styled("a")({
  color: colors.blue,
  textDecoration: "none",
  fontSize: "0.75rem",
  fontWeight: "400",
  transition: "color 0.3s",
  "&:hover": {
    color: colors.lightBlue,
    textDecoration: "underline",
  },
});

// Social Media Button
const SocialIconButton = styled(IconButton)(({ bg }) => ({
  color: "#ffffff",
  backgroundColor: bg,
  margin: "0.3rem",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: colors.lightBlue,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center" // Center grid items horizontally
        >
          {/* Company Info */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              CYNKCO
            </Typography>
            <Typography
              variant="body2"
              sx={{ maxWidth: "280px", lineHeight: 1.6 }}
            >
              Empowering collaboration and innovation with cutting-edge smart
              screen solutions and interactive technology.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/smart-screens">Products</FooterLink>
            <FooterLink to="/solutions">Solutions</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </Grid>

          {/* Products */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Products
            </Typography>
            <FooterLink to="/products/smart-screens">Smart Screens</FooterLink>
            <FooterLink to="/products/accessories">Screen Stands</FooterLink>
            <FooterLink to="/products/screen-stands">Accessories</FooterLink>
          </Grid>

          {/* Contact Info & Social Media */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ color: colors.lightBlue, mr: 1 }} />
              <Typography variant="body2">
                60 Paya Lebar Road, #06-39, Paya Lebar Square, Singapore 409051.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ color: colors.lightBlue, mr: 1 }} />
              <Typography variant="body2">+6560502580</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Email sx={{ color: colors.lightBlue, mr: 1 }} />
              <Typography variant="body2">info@connexit.biz</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Copyright Notice */}
        <Box textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Connex Information Technology (Pvt)
            Ltd. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Developed by{" "}
            <ExternalLink
              href="https://www.connexcodeworks.biz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connex Codeworks
            </ExternalLink>
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
