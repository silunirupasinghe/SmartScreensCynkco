import React from "react";
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../../../theme/colors"; // Adjust path to match your project structure

// Styled Components
const ContactSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.lightBlue})`,
  color: "#fff",
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: "12px",
  marginTop: theme.spacing(6),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: colors.darkBlue,
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  padding: theme.spacing(1.5, 4),
  borderRadius: "25px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: colors.lightBlue,
    color: "#fff",
  },
}));

function Contact() {
  return (
    <ContactSection>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          mb: 2,
        }}
      >
        Have Questions?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          mb: 3,
        }}
      >
        Contact us for more information or inquiries at{" "}
        <a
          href="tel:+1-800-555-1234"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          +1-800-555-1234
        </a>
      </Typography>
      <StyledButton component={Link} to="/contact">
        Contact Us
      </StyledButton>
    </ContactSection>
  );
}

export default Contact;
