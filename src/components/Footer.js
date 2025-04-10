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
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { styled } from "@mui/system";

// Theme Colors (aligned with CYNKCO branding)
const primaryColor = "#24AC4C"; // Green for icons
const textColor = "#E0E0E0"; // Light gray for text
const accentColor = "#E91E63"; // Pink for highlights

// Styled Footer Container
const FooterContainer = styled(Box)({
  backgroundColor: "#103B29", // Using your specified dark green
  color: textColor,
  padding: "4rem 0",
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
    color: primaryColor, // Green on hover (corrected from your comment)
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
    backgroundColor: primaryColor, // Hover turns to green
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Products
            </Typography>
            <FooterLink to="/products/smart-screens/ct-sc65wc">CT-SC65WC</FooterLink>
            <FooterLink to="/products/smart-screens/ct-sc65a">CT-SC65A</FooterLink>
            <FooterLink to="/products/smart-screens/ct-sc75a">CT-SC75A</FooterLink>
            <FooterLink to="/products/smart-screens/ct-sc86wc">CT-SC86WC</FooterLink>
            <FooterLink to="/products/smart-screens/ct-sc85a">CT-SC85A</FooterLink>
            <FooterLink to="/products/smart-screens/ct-sc75wc">CT-SC75WC</FooterLink>
          </Grid>

          {/* Contact Info & Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">
                456 Innovation Lane, Tech City, Sri Lanka
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">+94 112 233 445</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Email sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">support@cynkco.com</Typography>
            </Box>

            {/* Social Media */}
            <Box mt={3} display="flex">
              <SocialIconButton bg="#3b5998">
                <Facebook />
              </SocialIconButton>
              <SocialIconButton bg="#1DA1F2">
                <Twitter />
              </SocialIconButton>
              <SocialIconButton bg="#0077b5">
                <LinkedIn />
              </SocialIconButton>
              <SocialIconButton bg="#E4405F">
                <Instagram />
              </SocialIconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Copyright Notice */}
        <Box textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} CYNKCO Technologies (Pvt) Ltd. All
            Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;