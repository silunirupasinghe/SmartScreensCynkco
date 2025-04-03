import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import { styled } from '@mui/system';
import cynkcoLogo from '../Assets/cynkco.png'; // Ensure the path to your logo is correct

// Theme Colors
const primaryColor = '#24AC4C'; // Green for icons
const hoverColor = '#B8E6CA';   // Vibrant green on hover
const textColor = '#E0E0E0';    // Light gray for text

// Styled Footer Container
const FooterContainer = styled(Box)({
  backgroundColor: '#103B29', // Updated deep green background
  color: textColor,
  padding: '2rem 0',
  mt: 'auto',
});

// Styled Links
const FooterLink = styled(Link)({
  color: textColor,
  textDecoration: 'none',
  fontSize: '0.875rem',
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: '400',
  transition: 'color 0.3s',
  '&:hover': {
    color: hoverColor,
    textDecoration: 'underline',
  },
});

// Social Media Button
const SocialIconButton = styled(IconButton)(({ bg }) => ({
  color: '#ffffff',
  backgroundColor: bg,
  margin: '0.3rem',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: hoverColor,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={10} justifyContent="center">
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box component={Link} to="/" sx={{ display: 'flex', mb: 2 }}>
              <img
                src={cynkcoLogo}
                alt="Cynkco Logo"
                style={{ height: '40px', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="body2" sx={{ maxWidth: '280px', lineHeight: 1.6 }}>
              Transforming businesses with innovative smart solutions & digital transformation services.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">Products</FooterLink>
              <FooterLink to="/services">Support</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="center">
              Our Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <FooterLink to="/service01">CYNKCO VISION</FooterLink>
              {/* Uncomment more product links as needed */}
            </Box>
          </Grid>

          {/* Contact Info & Social Media */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">123 Tech Street, Colombo, Sri Lanka</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">+94 123 456 789</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <Email sx={{ color: primaryColor, mr: 1 }} />
              <Typography variant="body2">info@cynkco.com</Typography>
            </Box>

            {/* Social Media */}
            <Box display="flex" justifyContent="left">
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
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright */}
        <Box textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Connex Codeworks (Pvt) Ltd. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
